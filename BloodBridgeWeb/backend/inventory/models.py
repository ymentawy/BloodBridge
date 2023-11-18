from django.db import models

class Inventory(models.Model): 
    email = models.ForeignKey('patientusers.PatientUser', on_delete=models.CASCADE, null = False) 
    username = models.ForeignKey('users.user', on_delete=models.CASCADE, null = False)
    creation_date = models.DateTimeField()
