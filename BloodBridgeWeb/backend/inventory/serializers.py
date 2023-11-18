from rest_framework import serializers,generics
from .models import Inventory
from datetime import datetime

class InventorySerializer(serializers.ModelSerializer):
    creation_date = serializers.DateTimeField(default=datetime.utcfromtimestamp(0))
    class Meta:
        model = Inventory
        fields = '__all__'