from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers,generics
from rest_framework.exceptions import AuthenticationFailed
from .serializers import PatientRecordSerializer
from .models import PatientRecord
from django.http import JsonResponse
from django.apps import apps
from django.forms.models import model_to_dict
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404
from datetime import datetime, timedelta

class PatientRecordListView(APIView):
    def get(self, request, username):
        User = apps.get_model('users', 'User')
        PatientUser = apps.get_model('patientusers', 'PatientUser')
        PatientRecord = apps.get_model('patientrecords', 'PatientRecord')

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

        patient_records = PatientRecord.objects.filter(username_id=user)
        patient_details = []

        for record in patient_records:
            patient_user_data = model_to_dict(record)
            patient_users = PatientUser.objects.filter(id=record.email_id)
            if patient_users.exists():
                patient_user = model_to_dict(patient_users.first())
                patient_user_data.update(patient_user)
                del patient_user_data['username']
                del patient_user_data['expiration']
            patient_details.append(patient_user_data)

        response_data = {'patient_details': patient_details}

        return JsonResponse(response_data)
    
    
class CreateRequestView(APIView):
    def post(self,request):
        serializer = PatientRecordSerializer(data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    
class UpdateRequestView(APIView):
    def patch(self, request):
        email = request.data.get('email')
        username = request.data.get('username')
        status = request.data.get('status')
        patient_record = get_object_or_404(PatientRecord, email=email, username=username)
        if status == "Accepted":
            patient_record.expiration = datetime.now() + timedelta(days=7)
        else:
            patient_record.expiration = datetime(1970, 1, 1)
        patient_record.status = status
        patient_record.save()
        serializer = PatientRecordSerializer(patient_record)
        return Response(serializer.data)
