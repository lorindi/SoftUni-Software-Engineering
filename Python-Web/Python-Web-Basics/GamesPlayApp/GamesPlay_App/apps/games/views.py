
from apps.fuctionality.items import find_item
from apps.fuctionality.view_forms import view_form
from apps.games.forms import GamesModelBaseForm, GamesDeleteForm
from apps.games.models import GamesModel


# Create your views here.


def game_create(request):
    return view_form(
        request=request,
        base_form=GamesModelBaseForm,
        redirect_url='index',
        base_url='games/create-game.html',
    )


def game_details(request, pk):
    game = find_item(GamesModel, pk)

    return view_form(
        request=request,
        item_instance=game,
        base_form=GamesModelBaseForm,
        redirect_url='index',
        base_url='games/details-game.html',
        additional_data={
            'game': game
        }
    )


def game_edit(request, pk):
    game = find_item(GamesModel, pk)

    return view_form(
        request=request,
        item_instance=game,
        base_form=GamesModelBaseForm,
        redirect_url='index',
        base_url='games/edit-game.html',
        additional_data={
            'game': game
        }
    )


def game_delete(request, pk):
    game = find_item(GamesModel, pk)

    return view_form(
        request=request,
        item_instance=game,
        base_form=GamesDeleteForm,
        redirect_url='index',
        base_url='games/delete-game.html',
        delete_form=True,
        additional_data={
            'game': game
        }
    )
