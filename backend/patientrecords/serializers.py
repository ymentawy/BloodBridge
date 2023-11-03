from rest_framework import serializers,generics
from .models import PatientRecord
from datetime import datetime

class PatientRecordSerializer(serializers.ModelSerializer):
    status = serializers.CharField(default='Pending')
    expiration = serializers.DateTimeField(default=datetime.utcfromtimestamp(0))
    class Meta:
        model = PatientRecord
        fields = '__all__'