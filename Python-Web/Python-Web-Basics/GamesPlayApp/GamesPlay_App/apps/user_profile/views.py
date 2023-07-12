from django.shortcuts import render, redirect

from apps.fuctionality.get_user import get_user
from apps.fuctionality.items import get_all_items
from apps.fuctionality.view_forms import view_form
from apps.games.models import GamesModel
from apps.user_profile.forms import ProfileCreateForm, ProfileModelBaseForm
from apps.user_profile.models import ProfileModel


# Create your views here.


def profile_create(request):
    profile = get_user(ProfileModel)

    if profile:
        return redirect('index')

    return view_form(
        request=request,
        base_form=ProfileCreateForm,
        redirect_url='index',
        base_url='user_profile/create-profile.html',
    )


def profile_details(request):
    profile = get_user(ProfileModel)[0]
    games = get_all_items(GamesModel)
    total_games = len(games)
    name = f'{profile.first_name} {profile.last_name}'.replace('None', '')
    average_rating = sum(x.rating for x in games) / total_games if total_games else 0.0

    return render(request, 'user_profile/details-profile.html', context={
        'profile': profile,
        'name': name,
        'average_rating': average_rating,
        'total_games': total_games
    })


def profile_edit(request):

    profile = get_user(ProfileModel)[0]

    return view_form(
        request=request,
        item_instance=profile,
        base_form=ProfileModelBaseForm,
        redirect_url='index',
        base_url='user_profile/edit-profile.html',
    )


def profile_delete(request):
    if request.method == 'POST':
        ProfileModel.objects.all().delete()
        GamesModel.objects.all().delete()
        return redirect('index')

    return render(request, 'user_profile/delete-profile.html')
