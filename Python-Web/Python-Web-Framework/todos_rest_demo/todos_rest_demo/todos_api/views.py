from django.utils import translation
from django.utils.translation import gettext as _
from rest_framework import generics as api_views, serializers
from django.views import generic as views

from todos_rest_demo.todos_api.models import Todo, Category
from todos_rest_demo.todos_api.serializers import CategorySerializer, TodoSerializer, TodoCreateSerializer


class IndexViewForLocale(views.TemplateView):
    template_name = 'index.html'
    extra_context = {
        'title': _('My title'),
    }

    def get(self, request, *args, **kwargs):
        translation.activate('bg')
        return super().get(request, *args, **kwargs)




class CategoriesApiListView(api_views.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer


class TodosApiView(api_views.ListCreateAPIView):
    queryset = Todo.objects.all()
    list_serializer_class = TodoSerializer
    create_serializer_class = TodoCreateSerializer

    def get_serializer_class(self):
        if self.__is_get(self.request):
            return self.list_serializer_class
        return self.create_serializer_class

    def get_queryset(self):
        queryset = super().get_queryset()

        if not self.__is_get(self.request):
            return queryset

        category_id = self.request.query_params.get('category', None)

        if category_id:
            queryset = queryset.filter(category_id=category_id)

        queryset = queryset.filter(user=self.request.user)

        return queryset

    @staticmethod
    def __is_get(request):
        return request.method == 'GET'
