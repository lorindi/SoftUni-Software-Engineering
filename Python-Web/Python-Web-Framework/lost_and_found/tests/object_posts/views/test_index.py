from django.test import TestCase
from django.urls import reverse

from lost_and_found.objects_posts.models import Object, Post


class IndexViewTests(TestCase):
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

    def test_index__when_no_posts__expect_empty_posts(self):
        response = self.client.get(
            reverse('index'),
        )

        context = response.context

        self.assertEqual(200, response.status_code)
        self.assertEqual(0, len(context['posts']))

        self.assertTemplateUsed(response, 'index.html')

    def test_index__when_single_post__expect_single_post(self):
        # Arrange
        # Set up the DB
        post = self._create_post(self.VALID_POST_DATA)
        post.save()

        # Act
        response = self.client.get(
            reverse('index'),
        )

        # Assert
        context = response.context

        self.assertEqual(200, response.status_code)
        self.assertEqual(1, len(context['posts']))

        self.assertTemplateUsed(response, 'index.html')
