from django.core.exceptions import ValidationError
from django.test import TestCase

from lost_and_found.objects_posts.validators import validate_phone, INVALID_PHONE_MESSAGE


class ValidatePhoneTests(TestCase):
    @staticmethod
    def test_validate_phone__when_starts_with_plus__expect_nothing():
        phone = '+1231234123'
        validate_phone(phone)

    @staticmethod
    def test_validate_phone__when_starts_with_0__expect_nothing():
        phone = '01231234123'
        validate_phone(phone)

    def test_validate_phone__when_not_start_with_0_or_plus__expect_nothing(self):
        phone = '11231234123'
        with self.assertRaises(ValidationError) as context:
            validate_phone(phone)

        self.assertIsNotNone(context.exception)
        self.assertEqual(INVALID_PHONE_MESSAGE, context.exception.message)
