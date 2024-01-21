from django.contrib.auth import get_user_model
from django.test import TestCase
from django.urls import reverse

UserModel = get_user_model()


class LoginUserViewTests(TestCase):
    def test_login_user(self):
        user_data = {
            'username': 'Doncho',
            'password': 'asdt2341sa!!##@@#SDsadasd',
        }

        UserModel.objects.create_user(**user_data)
        self.client.login(**user_data)

        response = self.client.get(
            reverse('index'),
        )
