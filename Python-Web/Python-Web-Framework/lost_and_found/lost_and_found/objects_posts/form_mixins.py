class FieldsWithFormControlClassMixin:
    form_control_fields = ()  # tuple, list or `__all__`
    fields = {}

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._init_form_controls()

    def _init_form_controls(self):
        form_control_fields = self.form_control_fields \
            if self.form_control_fields != '__all__' \
            else self.fields.keys()

        for field_name in form_control_fields:
            self.fields[field_name].widget.attrs['class'] = 'form-control'
