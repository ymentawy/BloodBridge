from django.urls import path
from .views import PatientRecordListView, CreateRequestView,UpdateRequestView
urlpatterns = [
    path('createrequest/', CreateRequestView.as_view()),
    path('updatestatus/', UpdateRequestView.as_view()),
    path('getallrecords/<str:username>/', PatientRecordListView.as_view()),
]
