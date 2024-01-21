from django.urls import path

from lost_and_found.accounts.views import LoginUserView

urlpatterns = (
    path('login/', LoginUserView.as_view(), name='login_user'),
)
