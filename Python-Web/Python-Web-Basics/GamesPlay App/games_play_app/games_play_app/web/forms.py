from django import forms

from games_play_app.web.models import ProfileModel, GameModel


class CreateProfileForm(forms.ModelForm):
    class Meta:
        model = ProfileModel
        fields = ['email', 'age', 'password']
        widgets = {
            'password': forms.PasswordInput,
        }


class CreateGameForm(forms.ModelForm):
    class Meta:
        model = GameModel
        fields = "__all__"


class EditGameForm(CreateGameForm):
    pass


class DeleteGameForm(forms.ModelForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for (_, field) in self.fields.items():
            field.widget.attrs['disabled'] = 'disabled'
            field.widget.attrs['readonly'] = 'readonly'

    def save(self, commits=True):
        self.instance.delete()
        return self.instance

    class Meta:
        model = GameModel
        fields = '__all__'


class EditProfileForm(forms.ModelForm):
    class Meta:
        model = ProfileModel
        fields = '__all__'


class DeleteProfileForm(forms.ModelForm):
    def save(self, commit=True):
        self.instance.delete()
        return self.instance

    class Meta:
        model = ProfileModel
        fields = []