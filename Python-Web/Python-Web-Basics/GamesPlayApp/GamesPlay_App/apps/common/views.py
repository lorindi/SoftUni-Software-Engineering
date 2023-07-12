from django.shortcuts import redirect

from apps.fuctionality.get_user import get_user
from apps.fuctionality.items import get_all_items
from apps.fuctionality.view_forms import view_form
from apps.games.models import GamesModel
from apps.user_profile.forms import ProfileCreateForm
from apps.user_profile.models import ProfileModel


def index(request):
    profile = get_user(ProfileModel)

    if profile:
        return view_form(
            request=request,
            base_form=ProfileCreateForm,
            redirect_url='index',
            base_url='common/home-page.html'
        )

    return view_form(
        request=request,
        base_form=ProfileCreateForm,
        redirect_url='index',
        base_url='common/home-page.html',
        additional_data={
            'no_profile': True
        }
    )


def dashboard(request):
    profile = get_user(ProfileModel)
    games = get_all_items(GamesModel)

    if not profile:
        return redirect('index')

    return view_form(
        request=request,
        base_form=ProfileCreateForm,
        redirect_url='index',
        base_url='common/dashboard.html',
        additional_data={
            'games': games
        }
    )