from django.views import generic as views


class IndexView(views.TemplateView):
    template_name = 'index.html'

    def get(self, request, *args, **kwargs):
        # Make AJAX call
        return super().get(request, *args, **kwargs)
