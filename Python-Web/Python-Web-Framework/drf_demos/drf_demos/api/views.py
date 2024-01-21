from time import sleep

from django.views import generic as views
from rest_framework import generics as api_views, serializers, permissions
from rest_framework import viewsets
from rest_framework.pagination import PageNumberPagination

from drf_demos.api.models import Author


#
# @api_view
# def rest_view(request):
#     pass

# Server-side rendering (Templates)
class AuthorsView(views.ListView):
    queryset = Author.objects.all()
    template_name = 'authors.html'

    def get(self, request, *args, **kwargs):
        sleep(5)
        return super().get(request, *args, **kwargs)


'''
In DRF
Serializes Django models -> JSON
Deserializes JSON -> Django model
'''


class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ('first_name', 'last_name')


class CustomPageNumberPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'


class AuthorsApiViewSet(viewsets.ModelViewSet):
    queryset = Author.objects.all()
    serializer_class = AuthorSerializer


class AuthorsApiView(api_views.ListCreateAPIView):
    queryset = Author.objects.order_by('first_name', 'last_name', 'followers_count', 'pk')
    serializer_class = AuthorSerializer
    permission_classes = (
        permissions.IsAuthenticatedOrReadOnly,
    )

    pagination_class = CustomPageNumberPagination

    def get(self, request, *args, **kwargs):
        print(request.session.get('count', None))
        request.session['count'] = 5
        print(request.user)
        # sleep(5)
        return super().get(request, *args, **kwargs)
