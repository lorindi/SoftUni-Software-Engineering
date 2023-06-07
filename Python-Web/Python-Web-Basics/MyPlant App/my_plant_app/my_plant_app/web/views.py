from django.shortcuts import render, redirect

from my_plant_app.web.forms import ProfileCreateForm, PlantCreateForms, PlantEditForm, PlantDeleteForm, ProfileEditForm, DeleteProfileForm
from my_plant_app.web.models import Profile, Plant


def get_user():
    profiles = Profile.objects.all()
    if profiles:
        return profiles[0]
    return None
#връща всички обекти записани в базата данни,
# тези профили са списък от обекти.

def home_page(request):
    user = get_user()
    context = {
        'user': user
    }
    return render(request, 'home-page.html', context)

def create_profile(request):
    if request.method == 'POST':
        form = ProfileCreateForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('catalogue')

    else:
        form = ProfileCreateForm()

    context = {
        'form': form
    }

    return render(request, 'create-profile.html', context)


def catalogue(request):
    user = get_user()
    plants = Plant.objects.all()
    context = {
        'user': user,
        'plants': plants,
    }
    return render(request, 'catalogue.html', context)





def plant_create(request):
    if request.method == 'POST':
        form = PlantCreateForms(request.POST)
        if form.is_valid():
            form.save()
            return redirect('catalogue')
    else:
        form = PlantCreateForms()
    context = {'form': form}
    return render(request, 'create-plant.html', context)


def plant_details(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    context = {
        'plant': plant
    }
    return render(request, 'plant-details.html', context)





def plant_edit(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    if request.method == 'POST':
        form = PlantEditForm(request.POST, instance=plant)
        if form.is_valid():
            form.save()
            return redirect('catalogue')
    else:
        form = PlantEditForm(instance=plant)
    context = {
        'form': form,
        'plant': plant,
    }

    return render(request, 'edit-plant.html', context)


def plant_delete(request, pk):
    plant = Plant.objects.filter(pk=pk).get()
    form = PlantDeleteForm(instance=plant)
    if request.method == 'POST':
        plant.delete()
        return redirect('catalogue')
    context = {
        'form': form,
        'plant': plant,
    }
    return render(request, 'delete-plant.html', context)


def details_profile(request):
    profile = get_user()
    plants = Plant.objects.all()
    all_plants = len(plants)
    context = {
        'profile': profile,
        'plants': plants,
        'all_plants': all_plants
    }

    return render(request, 'profile-details.html', context)


def edit_profile(request):
    profile = get_user()
    if request.method == "POST":
        form = ProfileEditForm(request.POST, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('details profile')
    else:
        form = ProfileEditForm(instance=profile)
    context = {
        'profile': profile,
        'form': form,
    }
    return render(request, 'edit-profile.html', context)


def delete_profile(request):
    profile = get_user()
    plants = Plant.objects.all()
    if request.method == "POST":
        form = DeleteProfileForm(request.POST, instance = profile)
        plants.delete()
        form.save()
        return  redirect('home page')
    else:
        form = DeleteProfileForm(instance=profile)

    context = {

        'form': form,
        'profile': profile,
    }
    return render(request, 'delete-profile.html', context)
