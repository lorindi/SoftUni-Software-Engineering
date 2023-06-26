from django.urls import path
from django.views import generic as views
# from cvb.web.views import IndexView, Index2View
#
# urlpatterns = (
#     path('', IndexView().get_view()),
#     path('2/', Index2View.get_view()),
# )
from cvb.web.views import IndexView, IndexViewWithTemplate, IndexViewWithListView, EmployeeDetailsView, \
    EmployeeCreateView, EmployeeUpdateView

the_view = IndexView.as_view()
print(the_view)


urlpatterns = [
    # path('', IndexView.as_view()),
    path('', IndexViewWithListView.as_view(), name='index'),
    path('details/<int:pk>/', EmployeeDetailsView.as_view(), name='employee details'),
    path('create/', EmployeeCreateView.as_view(), name='employee create'),
    path('update/<int:pk>', EmployeeUpdateView.as_view(), name='employee update'),
    path('redirect-to-index/', views.RedirectView.as_view(url='/'), name='redirect to index'),
]