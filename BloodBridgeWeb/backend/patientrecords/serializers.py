from rest_framework import serializers,generics
from .models import PatientRecord

class PatientRecordSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='Pending')
    class Meta:
        model = PatientRecord
        fields = '__all__'