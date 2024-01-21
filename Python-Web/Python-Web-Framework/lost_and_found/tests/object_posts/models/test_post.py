from django.core.exceptions import ValidationError
from django.test import TestCase

from lost_and_found.objects_posts.models import Post, Object


# Arrange, Act, Assert

class PhoneTests(TestCase):
    VALID_POST_DATA = {
        'title': 'Lost',
        'description': 'Lost again',
        'author_name': 'Test User',
        'author_phone': '+359888814',
    }

    VALID_OBJECT_DATA = {
        'name': 'Obekt',
        'image': 'http://obekt.com',
        'width': 15,
        'height': 20,
        'weight': 25,
    }

    def _create_post(self, data, **kwargs):
        obj = Object.objects.create(**self.VALID_OBJECT_DATA)
        post_data = {
            **data,
            **kwargs,
            'object': obj,
        }

        return Post(**post_data)

    def test_create__when_valid__expect_to_be_created(self):
        post = self._create_post(self.VALID_POST_DATA)
        post.full_clean()
        post.save()

        self.assertIsNotNone(post.pk)

    def test_create__when_title_has_1_more_than_valid_characters__expect_to_raise(self):
        post = self._create_post(self.VALID_POST_DATA, title='t' * Post.MAX_TITLE_LENGTH + 't')

        with self.assertRaises(ValidationError) as context:
            # Needed explicit call in tests
            post.full_clean()

        # exception = context.exception

    def test_create__when_phone_is_none__expect_to_raise(self):
        invalid_data = {
            'author_phone': None,
        }

        post = self._create_post(self.VALID_POST_DATA, **invalid_data)

        with self.assertRaises(ValidationError):
            # Needed explicit call in tests
            post.full_clean()

    def test_create__when_phone_starts_not_with_0__plus___expect_to_raise(self):
        invalid_data = {
            'author_phone': '1' + self.VALID_POST_DATA['author_phone'][1:],
        }

        post = self._create_post(self.VALID_POST_DATA, **invalid_data)

        with self.assertRaises(ValidationError):
            # Needed explicit call in tests
            post.full_clean()
