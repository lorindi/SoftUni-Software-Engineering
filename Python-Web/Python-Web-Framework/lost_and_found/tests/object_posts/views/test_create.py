from django.test import TestCase
from django.urls import reverse

from lost_and_found.objects_posts.models import Object, Post


class CreateViewTests(TestCase):
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

    def test_create_post__when_valid__expect_to_be_created(self):
        # Act
        response = self.client.post(
            reverse('create'),
            data={
                **self.VALID_POST_DATA,
                **self.VALID_OBJECT_DATA,
            }
        )

        # Assert
        post = Post.objects.get(
            **self.VALID_POST_DATA,
        )
        obj = Object.objects.get(
            **self.VALID_OBJECT_DATA,
            pk=post.object_id,
        )

        self.assertEqual(302, response.status_code)
        self.assertIsNotNone(post)
        self.assertIsNotNone(obj)
