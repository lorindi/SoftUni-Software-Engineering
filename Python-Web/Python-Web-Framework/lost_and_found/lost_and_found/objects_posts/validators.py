from django.core.exceptions import ValidationError

# '0' or '+'

INVALID_PHONE_MESSAGE = 'Phone must start with "0" or "+"'


def validate_phone(value):
    if not value.startswith('0') \
            and not value.startswith('+'):
        raise ValidationError(INVALID_PHONE_MESSAGE)
