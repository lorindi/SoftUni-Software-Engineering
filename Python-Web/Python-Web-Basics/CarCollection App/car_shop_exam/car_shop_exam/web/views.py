from django.shortcuts import render, redirect

from car_shop_exam.web.forms import ProfileCreateForm, CardCreateForm, CarEditForm, CarDeleteForm, ProfileEditForm, DeleteProfileForm
from car_shop_exam.web.models import Profile, Car


def get_profile():
    users = Profile.objects.all()
    if users:
        return users[0]
    return None


def index(request):
    user = get_profile()
    context = {
        'user': user,
    }
    return render(request, 'index.html', context)


def profile_create(request):
    if request.method == 'POST':
        form = ProfileCreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('catalogue')
    else:
        form = ProfileCreateForm()
    context = {
        'form': form,
    }
    return render(request, 'profile-create.html', context)


def profile_details(request):
    user = get_profile()
    cars = Car.objects.all()
    car_price = sum([car.price for car in cars])
    context = {
        'user': user,
        'car_price': car_price,
    }
    return render(request, 'profile-details.html', context)


def profile_edit(request):
    user = get_profile()
    if request.method == 'POST':
        form = ProfileEditForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('profile details')
    else:
        form = ProfileEditForm(instance=user)
    context = {
        'form': form,
        'car': user,

    }

    return render(request, 'profile-edit.html', context)


def profile_delete(request):
    user = get_profile()
    cars = Car.objects.all()

    if request.method == "POST":
        form = DeleteProfileForm(request.POST, instance=user)
        cars.delete()
        form.save()
        return redirect('home page')
    else:
        form = DeleteProfileForm(instance=user)

    context = {
        'form': form,
        'user': user,
    }
    return render(request, 'profile-delete.html', context)


def catalogue(request):
    cars = Car.objects.all()
    total_cars = len(cars)
    context = {
        'cars': cars,
        'total_cars': total_cars,
    }
    return render(request, 'catalogue.html', context)


def car_create(request):
    if request.method == 'POST':
        form = CardCreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('catalogue')
    else:
        form = CardCreateForm()
    context = {
        'form': form,
    }
    return render(request, 'car-create.html', context)


def car_details(request, pk):
    car = Car.objects.filter(pk=pk).get()
    context = {
        'car': car,

    }
    return render(request, 'car-details.html', context)


def car_edit(request, pk):
    car = Car.objects.filter(pk=pk).get()
    if request.method == 'POST':
        form = CarEditForm(request.POST, instance=car)
        if form.is_valid():
            form.save()
            return redirect('catalogue')
    else:
        form = CarEditForm(instance=car)
    context = {
        'form': form,
        'car': car,

    }
    return render(request, 'car-edit.html', context)





def car_delete(request, pk):
    car = Car.objects.filter(pk=pk).get()
    form = CarDeleteForm(instance=car)
    if request.method == 'POST':
        car.delete()
        return redirect('catalogue')

    context = {
        'form': form,
        'car': car,
    }

    return render(request, 'car-delete.html', context)
# Create your views here.
