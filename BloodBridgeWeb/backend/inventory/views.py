from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import serializers,generics
from rest_framework.exceptions import AuthenticationFailed
from .serializers import InventorySerializer
from .models import Inventory
from django.http import JsonResponse
from django.apps import apps
from django.forms.models import model_to_dict
from django.core.serializers import serialize
from django.shortcuts import get_object_or_404
from datetime import datetime, timedelta

class InventoryListView(APIView):
    def get(self, request, username):
        User = apps.get_model('users', 'User')
        PatientUser = apps.get_model('patientusers', 'PatientUser')
        Inventory = apps.get_model('inventory', 'Inventory')

        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return JsonResponse({'error': 'User not found'}, status=404)

        Inventory = Inventory.objects.filter(username_id=user)
        details = []

        for record in Inventory:
            patient_user_data = model_to_dict(record)
            patient_users = PatientUser.objects.filter(id=record.email_id)
            if patient_users.exists():
                patient_user = model_to_dict(patient_users.first())
                patient_user["unique_id"] = record.id
                patient_user_data.update(patient_user)
            details.append(patient_user_data)

        response_data = {'details': details}

        return JsonResponse(response_data)
    
    
class CreateRequestView(APIView):
    def post(self,request):
        serializer = InventorySerializer(data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    
class UpdateRequestView(APIView):
    def patch(self, request):
        email = request.data.get('email')
        username = request.data.get('username')
        inventory = get_object_or_404(inventory, email=email, username=username)
        inventory.save()
        serializer = InventorySerializer(inventory)
        return Response(serializer.data)
