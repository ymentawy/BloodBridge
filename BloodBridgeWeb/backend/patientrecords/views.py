from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers,generics
from rest_framework.exceptions import AuthenticationFailed
from .serializers import PatientRecordSerializer
from .models import PatientRecord
from django.db import connections
from django.http import JsonResponse
from django.apps import apps
from django.forms.models import model_to_dict
from django.core.serializers import serialize
import json

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
            patient_details.append(patient_user_data)

        response_data = {'patient_details': patient_details}

        return JsonResponse(response_data)
    
    
class CreateRequestView(APIView):
    def post(self,request):
        serializer = PatientRecordSerializer(data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
