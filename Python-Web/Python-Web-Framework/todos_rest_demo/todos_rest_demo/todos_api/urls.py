from django.urls import path

from todos_rest_demo.todos_api.views import TodosApiView, CategoriesApiListView, IndexViewForLocale

urlpatterns = (
    path('ssr/', IndexViewForLocale.as_view(), name='index'),
    path('', TodosApiView.as_view(), name='api_todos'),
    path('categories/', CategoriesApiListView.as_view(), name='api_todo_categories')
)
