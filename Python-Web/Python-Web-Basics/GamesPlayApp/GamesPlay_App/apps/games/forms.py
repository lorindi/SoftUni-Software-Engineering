from django import forms
from apps.games.models import GamesModel


class GamesModelBaseForm(forms.ModelForm):
    class Meta:
        model = GamesModel
        fields = '__all__'




class GamesDeleteForm(GamesModelBaseForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.__set_disable_fields()


    def save(self, commit=True):
        if commit:
            self.instance.delete()

    def __set_disable_fields(self):
        for field in self.fields.values():
            field.widget.attrs['disabled'] = True
            # field.label_suffix = ''
