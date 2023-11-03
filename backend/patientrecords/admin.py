from django.contrib import admin
from patientrecords.models import PatientRecord
from patientusers.models import PatientUser
from users.models import User

admin.site.register(PatientRecord)
admin.site.register(PatientUser)
admin.site.register(User)