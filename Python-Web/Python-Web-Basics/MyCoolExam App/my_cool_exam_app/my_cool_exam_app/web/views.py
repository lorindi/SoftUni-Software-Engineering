from django.shortcuts import render, redirect
from my_cool_exam_app.web.forms import CreateProfileForm, CreateFruitForm, EditFruitForm, DeleteFruitForm, EditProfileForm, \
    DeleteProfileForm
from my_cool_exam_app.web.models import Fruit, Profile


def get_profile():
    profiles = Profile.objects.all()
    if profiles:
        return profiles[0]
    return None


def get_all_fruit():
    return Fruit.objects.all()


def get_fruit_pk(pk):
    return Fruit.objects.filter(pk=pk).get()


def index(request):
    profile = get_profile()

    context = {
        'profile': profile
    }
    return render(request, 'index.html', context)


def dashboard(request):
    fruits = get_all_fruit()
    profile = get_profile()
    context = {
        'profile': profile,
        'fruits': fruits,

    }
    return render(request, 'dashboard.html', context)


def create_fruit(request):
    profile = get_profile()
    if request.method == 'POST':
        form = CreateFruitForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('dashboard')

    else:
        form = CreateFruitForm()
    context = {
        'profile': profile,
        'form': form
    }

    return render(request, 'create-fruit.html', context)


def details_fruit(request, pk):
    fruit = get_fruit_pk(pk)
    context = {
        'fruit': fruit,
    }
    return render(request, 'details-fruit.html', context)


def edit_fruit(request, pk):
    fruit = get_fruit_pk(pk)
    if request.method == 'POST':
        form = EditFruitForm(request.POST, instance=fruit)
        if form.is_valid:
            form.save()
            return redirect('dashboard')
    else:
        form = EditFruitForm(instance=fruit)
    context = {
        'form': form,
        'fruit': fruit,

    }
    return render(request, 'edit-fruit.html', context)


def delete_fruit(request, pk):
    fruit = get_fruit_pk(pk)
    form = DeleteFruitForm(instance=fruit)
    if request.method == 'POST':
        fruit.delete()
        return redirect('dashboard')

    context = {
        'form': form,
        'fruit': fruit,
    }
    return render(request, 'delete-fruit.html', context)


def create_profile(request):
    if request.method == 'GET':
        form = CreateProfileForm()
    else:
        form = CreateProfileForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('index')

    context = {
        'form': form,
    }
    return render(request, 'create-profile.html', context)


def details_profile(request):
    profile = get_profile()
    fruits = Fruit.objects.all()
    all_posts = None
    if len(fruits) == 0:
        all_posts = 0
    elif len(fruits) > 0:
        all_posts = len(fruits)
    context = {
        'profile': profile,
        'all_posts': all_posts
    }

    return render(request, 'details-profile.html', context)


def edit_profile(request):
    profile = get_profile()

    if request.method == 'POST':
        form = EditProfileForm(request.POST, instance=profile)
        if form.is_valid():
            form.save()
            return redirect('details profile')
    else:
        form = EditProfileForm(instance=profile)

    context = {
        'form': form,
        'fruit': profile,
    }
    return render(request, 'edit-profile.html', context)


def delete_profile(request):
    profile = get_profile()
    game = get_all_fruit()

    if request.method == "POST":
        form = DeleteProfileForm(request.POST, instance=profile)
        game.delete()
        form.save()
        return redirect('index')
    else:
        form = DeleteProfileForm(instance=profile)

    context = {
        'form': form,
        'profile': profile,
    }
    return render(request, 'delete-profile.html', context)
