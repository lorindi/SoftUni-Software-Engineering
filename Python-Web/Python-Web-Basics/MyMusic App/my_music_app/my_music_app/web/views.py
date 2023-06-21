from django.shortcuts import render, redirect
from my_music_app.web.models import Profile, Album
from my_music_app.web.forms import CreateProfileForm, CreateAlbumForm, EditAlbumForm, DeleteAlbumForm
# Create your views here.

def get_profile():
    users = Profile.objects.all()
    if users:
        return users[0]
    return None

def get_all_albums():
    return Album.objects.all()

def get_album(pk):
    return Album.objects.get(pk=pk)


def home_page(request):
    profile = get_profile()
    albums = get_all_albums()

    if profile:
        context = {
            'profile': profile,
            'albums': albums
        }
        return render(request, 'home-with-profile.html', context)

    else:
        if request.method == 'GET':
            form = CreateProfileForm()
        else:
            form = CreateProfileForm(request.POST)
            if form.is_valid():
                form.save()
            return redirect('home page')

        context = {
            'profile': profile,
            'form': form
        }

        return render(request, 'home-no-profile.html', context)


def profile_details(request):
    profile = get_profile()
    albums = get_all_albums()
    context = {
        'profile': profile,
        'albums': len(albums)
    }
    return render(request, 'profile-details.html', context)


def profile_delete(request):
    albums = get_all_albums()
    profile = get_profile()

    if request.method == 'POST':
        albums.delete()
        profile.delete()

        return redirect('home page')

    return render(request, 'profile-delete.html')


def add_album(request):
    if request.method == 'GET':
        form = CreateAlbumForm()

    else:
        form = CreateAlbumForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home page')

    context = {
        'form': form
    }
    return render(request, 'add-album.html', context)


def details_album(request, pk):
    album = get_album(pk)
    context = {
        'album': album
    }
    return render(request, 'album-details.html', context)


def edit_album(request, pk):
    album = get_album(pk)
    if request.method == "GET":
        form = EditAlbumForm(instance=album)
    else:
        form = EditAlbumForm(request.POST, instance=album)
        if form.is_valid():
            form.save()
            return redirect('home page')
    context = {
        'album': album,
        'form': form,
    }
    return render(request, 'edit-album.html', context)


def delete_album(request, pk):
    album = get_album(pk)

    if request.method == 'GET':
        form = DeleteAlbumForm(instance=album)
    else:
        form = DeleteAlbumForm(request.POST, instance=album)
        if form.is_valid():
            form.save()
            return redirect('home page')

    context = {
        'album': album,
        'form': form
    }

    return render(request, 'delete-album.html', context)






