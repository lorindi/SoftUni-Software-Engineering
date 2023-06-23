from django.shortcuts import render, redirect

from games_play_app.web.forms import CreateProfileForm, CreateGameForm, EditGameForm, DeleteGameForm, EditProfileForm, \
    DeleteProfileForm
from games_play_app.web.models import ProfileModel, GameModel


def get_profile():
    profiles = ProfileModel.objects.all()
    if profiles:
        return profiles[0]
    return None


def get_all_games():
    return GameModel.objects.all()


def get_game_pk(pk):
    return GameModel.objects.filter(pk=pk).get()


def home_page(request):
    profile = get_profile()

    context = {
        'profile': profile
    }
    return render(request, 'home-page.html', context)


def dashboard(request):
    games = get_all_games()
    profile = get_profile()
    context = {
        'profile': profile,
        'games': games,

    }
    return render(request, 'dashboard.html', context)


def create_game(request):

    if request.method == 'POST':
        form = CreateGameForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('dashboard')
    else:
        form = CreateGameForm()

    context = {
        'form': form,
    }
    return render(request, 'create-game.html', context)


def details_game(request, pk):
    game = get_game_pk(pk)
    context = {
        'game': game,
    }
    return render(request, 'details-game.html', context)


def edit_game(request, pk):
    game = get_game_pk(pk)
    if request.method == 'POST':
        form = EditGameForm(request.POST, instance=game)
        if form.is_valid:
            form.save()
            return redirect('dashboard')
    else:
        form = EditGameForm(instance=game)
    context = {
        'form': form,
        'game': game,

    }
    return render(request, 'edit-game.html', context)


def delete_game(request, pk):
    game = get_game_pk(pk)
    form = DeleteGameForm(instance=game)
    if request.method == 'POST':
        game.delete()
        return redirect('dashboard')

    context = {
        'form': form,
        'game': game,
    }

    return render(request, 'delete-game.html', context)


def create_profile(request):
    if request.method == 'GET':
        form = CreateProfileForm()
    else:
        form = CreateProfileForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('home page')

    context = {
        'form': form,
    }
    return render(request, 'create-profile.html', context)


def details_profile(request):
    profile = get_profile()
    games = get_all_games()
    total_games = len(get_all_games())
    average_rating = sum([game.rating for game in games])

    context = {
        'profile': profile,
        'games': games,
        'total_games': total_games,
        'average_rating': average_rating,
    }
    return render(request, 'details-profile.html', context)


def edit_profile(request):
    user = get_profile()
    if request.method == 'POST':
        form = EditProfileForm(request.POST, instance=user)
        if form.is_valid():
            form.save()
            return redirect('details profile')
    else:
        form = EditProfileForm(instance=user)

    context = {
        'form': form,
        'game': user,
    }

    return render(request, 'edit-profile.html', context)


def delete_profile(request):
    user = get_profile()
    game = get_all_games()

    if request.method == "POST":
        form = DeleteProfileForm(request.POST, instance=user)
        game.delete()
        form.save()
        return redirect('home page')
    else:
        form = DeleteProfileForm(instance=user)

    context = {
        'form': form,
        'user': user,
    }
    return render(request, 'delete-profile.html', context)



