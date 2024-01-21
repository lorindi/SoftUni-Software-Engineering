from django.shortcuts import render, redirect
from django.views import generic as views
from lost_and_found.objects_posts.models import Post
from lost_and_found.objects_posts.forms import PostCreateForm, ObjectForm, PostEditForm


class IndexView(views.ListView):
    model = Post
    template_name = 'index.html'
    context_object_name = 'posts'

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

# Arrange, Act, Assert (or 3A)
# Setup,   run, check result

# def index(request):
#     context = {
#         'posts': Post.objects.all(),
#     }
#
#     return render(request, 'index.html', context)



def edit(request, pk):
    post = Post.objects.get(pk=pk)
    form = PostEditForm(instance=post)

    if request.method == "POST":
        form = PostEditForm(request.POST, instance=post)
        if form.is_valid():
            form.save()
            return redirect('index')

    context = {'post_form': form}
    return render(request, 'post_edit.html', context)


def delete(request, pk):
    post = Post.objects.get(pk=pk)
    post.delete()
    return redirect('index')


def found(request, pk):
    post = Post.objects.get(pk=pk)
    post.found = True
    post.save()
    return redirect('index')


def create(request):
    post_form = PostCreateForm()
    object_form = ObjectForm()
    if request.method == "POST":
        post_form = PostCreateForm(request.POST)
        object_form = ObjectForm(request.POST)

        if post_form.is_valid() and object_form.is_valid():
            obj = object_form.save()
            post = post_form.save(commit=False)
            post.object = obj
            post.save()

            return redirect('index')

    context = {
        'post_form': post_form,
        'object_form': object_form,
    }

    return render(request, 'post_create.html', context)
