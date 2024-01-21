from django.urls import path

from cbv_demos.web.views import list_articles, ArticlesListView, RedirectToArticlesView, ArticleDetailView, \
    ArticleCreateView, ArticleDeleteView

urlpatterns = (
    path('', list_articles, name='list_articles'),
    path('cbv/', ArticlesListView.as_view(), name='list_articles_cbv'),
    # path('cbv/<int:id>/', ArticlesListView.as_view(), name='list_articles_cbv by'),
    path('cbv/<int:pk>/', ArticleDetailView.as_view(), name='details_article'),
    path('cbv/create/', ArticleCreateView.as_view(), name='create_article'),

    path('cbv/delete/<int:pk>/', ArticleDeleteView.as_view(), name='delete_article'),

    path('redirect-to-articles/', RedirectToArticlesView.as_view(), name='redirect_to_articles'),
)
