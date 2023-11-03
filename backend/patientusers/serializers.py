from rest_framework import serializers
from .models import PatientUser

class PatientUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = PatientUser
        fields = '__all__'