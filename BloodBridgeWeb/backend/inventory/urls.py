from django.urls import path
from .views import InventoryListView, CreateRequestView,UpdateRequestView
urlpatterns = [
    path('createrequest/', CreateRequestView.as_view()),
    path('update/', UpdateRequestView.as_view()),
    path('getallrecords/<str:username>/', InventoryListView.as_view()),
]
