from rest_framework.authtoken import views as api_auth_views
from rest_framework import generics as api_views
from rest_framework.response import Response

from todos_rest_demo.accounts.serializers import RegisterUserSerializer


class ApiLoginUserView(api_auth_views.ObtainAuthToken):
    pass


class ApiRegisterUserView(api_views.CreateAPIView):
    serializer_class = RegisterUserSerializer


class ApiLogoutUserView(api_views.views.APIView):
    def post(self, request, *args, **kwargs):
        return self.__perform_logout(request)

    def get(self, request, *args, **kwargs):
        return self.__perform_logout(request)

    @staticmethod
    def __perform_logout(request):
        request.user.auth_token.delete()
        return Response({
            'message': 'user logged out'
        })
