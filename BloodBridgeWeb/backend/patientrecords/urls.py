from django.urls import path
from .views import PatientRecordListView, CreateRequestView
urlpatterns = [
    path('createrequest/', CreateRequestView.as_view()),
    path('getallrecords/<str:username>/', PatientRecordListView.as_view()),
]
