from django.core.exceptions import ValidationError


def validate_value_between_0_and_1(value):
    if value < 0 or 1 < value:
        # throw
        raise ValidationError('....')
