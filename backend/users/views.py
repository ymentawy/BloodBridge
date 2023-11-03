from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer
from rest_framework import status
from .models import User
import jwt, datetime

class RegisterView(APIView):
    def post(self,request):
        serializer = UserSerializer(data = request.data)
        serializer.is_valid(raise_exception= True)
        serializer.save()
        return Response(serializer.data)
    
class LoginView(APIView):
    def post(self,request):
        username = request.data['username']
        password = request.data['password']
        user = User.objects.filter(username = username).first()
        if user is None:
            raise AuthenticationFailed("User not Found!")
        if not user.check_password(password):
            raise AuthenticationFailed("Incorrect Password!")
        
        payload = {
            "id" : user.id,
            "exp": datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            "iat": datetime.datetime.utcnow()
                   }
        token = jwt.encode(payload, 'secret', algorithm = 'HS256')
        response = Response()
        response.data = {"jwt":token}
        response.set_cookie(key = 'jwt', value = token, httponly= True)
        return response
class UserView(APIView):
    def get(self,request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed("Unauthenticated!")
        try:
            payload = jwt.decode(token, 'secret', algorithms = ['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed("Unauthenticated!")
        user = User.objects.filter(id = payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)
class IDView(APIView):
    def get(self, request, username):
        try:
            user = User.objects.get(username=username)
            user_id = user.id
            return Response({'id': user_id}, status=status.HTTP_200_OK)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)
        
class LogoutView(APIView):
    def post(self,request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {"message":"Log Out Successful."}
        return response