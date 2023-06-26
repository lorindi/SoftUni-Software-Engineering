import random

from django import forms
from django.urls import reverse, reverse_lazy
from django.views import generic as views
from django.http import HttpResponse
from django.shortcuts import render

from cvb.web.models import Employee



def index(request):
    # if request.method == 'GET':
    #     pass
    # return HttpResponse('It works from FBV')
    context = {
        'title': 'FBV',
    }
    return render(request, 'index.html', context)


class IndexView(views.View):
    def get(self, request):
        context = {
            'title': 'Bare View',
        }

        return render(request, 'index.html', context)
        # return HttpResponse('It works from CBV')

    def post(self, request):
        pass


class IndexViewWithTemplate(views.TemplateView):

    template_name = 'index.html'
    extra_context = {
        'title': 'Template view',
    }


    def get_context_data(self, **kwargs):
        # Get 'super' s context
        context = super().get_context_data(**kwargs)

        # Add specific view stuff
        context['employees'] = Employee.objects.all()

        # Return the ready-to-use context
        return context


class IndexViewWithListView(views.ListView):
    context_object_name = 'employees'
    model = Employee
    template_name = 'index.html'
    extra_context = {
        'title': 'ListView',
    }

    # слагаме червена точка, play и дебъгваме като презаредим страницата
    def get(self, *args, **kwargs):
        return super().get(*args, **kwargs)



    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['pattern'] = self.__get_pattern()
        return context


    
    def get_queryset(self):
        queryset = super().get_queryset()

        pattern = self.__get_pattern()
        if pattern:
            # Employee.objects.filter(first_name__icontains=)
            queryset = queryset.filter(first_name__icontains=pattern)


        #сортира по first_name
        # queryset = queryset.order_by('first_name')
        return queryset

    def __get_pattern(self):
        pattern = self.request.GET.get('pattern', None)
        # if pattern:
        #     return pattern.lower
        # return None
        return pattern.lower() if pattern else None


class EmployeeDetailsView(views.DetailView):
    model = Employee
    template_name = 'employees/details.html'


class EmployeeCreateForm(forms.ModelForm):
    class Meta:
        model = Employee
        fields = '__all__'
        widgets = {
            'first_name': forms.TextInput(
                attrs= {
                    'placeholder': 'Enter name',
                }
            )
        }

class EmployeeCreateView(views.CreateView):
    template_name = 'employees/create.html'
    # Автоматично генерира форма, но ако подаваме форма няма нужда от тези.
    model = Employee
    fields = '__all__'
    # success_url = '/' #static 'success_url'



    # Dynamic
    def get_success_url(self):
        create_object = self.object
        return reverse('employee details', kwargs={'pk': create_object.pk})



# Replace automatic form
#     form_class = EmployeeCreateForm
# Change the automatic form
    # Ако не искаме да генерираме цялата форма:
    # def get_form(self, form_class=None):
    #     form = super().get_form(form_class=form_class)
    #     for name, field in form.fields.items():
    #         field.widget.attrs['placeholder'] = 'Enter ' + name
    #     return form


    # дебъгваме
    # def post(self, *args, **kwargs):
    #     return super().post(*args, **kwargs)

    #дебъгваме
    # def get(self, *args, **kwargs):
    #     return super().get(*args, **kwargs)


# class RedirectToDetailsMixing:
#     url_name = None
#     def get_url_kwargs(self):
#         return {}
#
#     def get_success_url(self):
#         return reverse_lazy(self.url_name, kwargs=self.get_url_kwargs())


# class EmployeeUpdateView(RedirectToDetailsMixing, views.UpdateView):
class EmployeeUpdateView(views.UpdateView):
    model = Employee
    fields = '__all__'
    template_name = 'employees/edit.html'
    success_url = reverse_lazy('index')

    def dispatch(self, request, *args, **kwargs):
        # if the employee to update is the same as the user logged in => continue
        return super().dispatch(request, *args, **kwargs)

    # url_name = 'employee details'
    #
    # def get_url_kwargs(self):
    #     return {
    #         'pk': self.object.pk,
    #     }

    # def get(self, *args, **kwargs):
    #     result = super().get(*args, **kwargs)
    #     print(self.kwargs)
    #     return result
    #
    # def get_success_url(self):
    #     # print(self.kwargs)
    #     result = reverse_lazy('employee details', kwargs={'pk': self.object.pk})
    #     return result







#Искам да покажеш списък от то това Employee в този template_name
# class IndexViewWithListView(views.ListView):
#     # context_object_name = 'employees'
#     model = Employee
#     template_name = 'index.html'

# class IndexView:
#     # def __init__(self):
#     #     self.value = random.randint(1, 15)
#
#     def __init__(self):
#         self.values = [
#             random.randint(1, 15),
#         ]
#
#     # @classmethod
#     # def get_view(cls):
#     #     instance = IndexView()
#     #     the_view = instance.view
#     #     print(the_view)
#     #     return the_view
#     # @classmethod
#     # def get_view(cls):
#     #     return IndexView().get_view
#     @classmethod
#     def get_view(cls):
#         return cls().view
#
#
#     # def view(self, request):
#     #     return HttpResponse(f'It works: {self.value}')
#     def view(self, request):
#         return HttpResponse(f'It works: {self.values}')
#
#
# # def view(request):
# #     return HttpResponse('It works')
# class Index2View(IndexView):
#     def __init__(self):
#         super().__init__()
#         self.values.append(random.randint(15, 30))
#
#
# def view(self, request):
#     return HttpResponse(f'It works')
# index()
# index_view = IndexView().get_view