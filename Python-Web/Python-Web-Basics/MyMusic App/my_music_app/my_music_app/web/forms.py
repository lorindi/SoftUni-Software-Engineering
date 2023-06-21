from django import forms
from my_music_app.web.models import Profile, Album


class CreateProfileForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'
        widgets = {
            'username': forms.TextInput(
                attrs={
                    'placeholder': 'Username'
                }
            ),
            'email': forms.EmailInput(
                attrs={
                    'placeholder': 'Email'
                }
            ),
            'age': forms.NumberInput(
                attrs={
                    'placeholder': 'Age'
                }
            ),
        }


class CreateAlbumForm(forms.ModelForm):
    class Meta:
        model = Album
        fields = '__all__'
        widgets = {
            'album_name': forms.TextInput(
                attrs={
                    'placeholder': 'Album Name'
                }
            ),
            'artist': forms.TextInput(
                attrs={
                    'placeholder': 'Artist'
                }
            ),
            'description': forms.Textarea(
                attrs= {
                    'placeholder': 'Description'
                }
            ),
            'image_url': forms.URLInput(
                attrs={
                    'placeholder': 'Image URL'
                }
            ),
            'Price': forms.NumberInput(
                attrs={
                    'placeholder': 'Price'
                }
            ),
        }


class EditAlbumForm(CreateAlbumForm):
    pass


class DeleteAlbumForm(CreateAlbumForm):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__set_disabled_fields()

    def save(self, commit=True):
        if commit:
            self.instance.delete()
        return self.instance

    def __set_disabled_fields(self):
        for field in self.fields.values():
            field.disabled = True