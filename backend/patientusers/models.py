from django.db import models

class PatientUser(models.Model):
    name = models.CharField(max_length = 255)
    password = models.CharField(max_length = 255)
    email = models.CharField(max_length = 255, unique=True)
    age = models.IntegerField()
    type = models.CharField(max_length=3)