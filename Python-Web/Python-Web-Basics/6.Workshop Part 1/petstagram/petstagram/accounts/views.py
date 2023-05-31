from django.shortcuts import render

# Create your views here.
def login_user(request, pk):
    return render(request, 'accounts/login-page.html')

def register_user(request, pk):
    return render(request, 'accounts/register-page.html')


def delete_user(request, pk):
    return render(request, 'accounts/profile-delete-page.html')


def details_user(request, pk):
    return render(request, 'accounts/profile-details-page.html')

def edit_user(request, pk):
    return render(request, 'accounts/profile-edit-page.html')