from django import forms

from my_plant_app.web.models import Profile, Plant




class ProfileCreateForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = ['username', 'first_name', 'last_name']
        # widgets = {
        #     'username': forms.TextInput(attrs={'placeholder': 'Enter username...'})
        # }


class PlantCreateForms(forms.ModelForm):
    class Meta:
        model = Plant
        fields = '__all__'
        # widgets = {
        #     'name': forms.TextInput(attrs={
        #         'glaceholder': 'Plant Name'
        #     })
        # }

class PlantEditForm(forms.ModelForm):
    class Meta:
        model = Plant
        fields = '__all__'


class PlantDeleteForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for (_, field) in self.fields.items():
            field.widget.attrs['disabled'] = 'disabled'
            field.widget.attrs['readonly'] = 'readonly'

    class Meta:
        model = Plant
        fields = ['plant_type', 'name', 'image_url', 'description', 'price']



class ProfileEditForm(forms.ModelForm):
    class Meta:
        model = Profile
        fields = '__all__'


class DeleteProfileForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        for _, field in self.fields.items():
            field.widget.attrs['disabled'] = 'disabled'
            field.widget.attrs['readonly'] = 'readonly'

    def save(self, commit = True):
        self.instance.delete()
        return self.instance

    class Meta:
        model = Profile
        fields = []
