from django.db import models

class PatientRecord(models.Model): 
    email = models.ForeignKey('patientusers.PatientUser', on_delete=models.CASCADE, null = False) 
    username = models.ForeignKey('users.user', on_delete=models.CASCADE, null = False)
    status =  models.CharField(max_length = 10)
    expiration = models.DateTimeField()
