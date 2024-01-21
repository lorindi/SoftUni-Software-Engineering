from django import forms
from django.forms import modelform_factory
from django.test import TestCase

from lost_and_found.objects_posts.form_mixins import FieldsWithFormControlClassMixin


class FakeForm(FieldsWithFormControlClassMixin, forms.Form):
    title = forms.CharField(max_length=30)
    author_name = forms.CharField(max_length=20)
    form_control_fields = '__all__'


class FieldsWithFormControlClassMixinTests(TestCase):
    def test_mixin_when_all__expect_all_html_class(self):
        form = FakeForm()

        for _, field in form.fields.items():
            self.assertEqual(
                'form-control',
                field.widget.attrs['class']
            )

    def test_mixin_when_only_title__expect_only_title_to_have_html_class(self):
        FakeForm.form_control_fields = ('title',)
        form = FakeForm()

        self.assertEqual(
            'form-control',
            form.fields['title'].widget.attrs['class'],
        )

        for field_name, field in form.fields.items():
            if field_name == 'title':
                continue

            self.assertFalse(
                'class' in field.widget.attrs,
            )
