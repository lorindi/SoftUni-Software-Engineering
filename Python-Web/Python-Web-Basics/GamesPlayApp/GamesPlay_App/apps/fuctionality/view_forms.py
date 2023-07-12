from django.shortcuts import render, redirect


def view_form(request='',
              base_form='',
              item_instance='',
              redirect_url='',
              base_url='',
              additional_data='',
              delete_form=False):

    if request.method == 'GET':
        form = base_form(instance=item_instance if item_instance else None)

    else:
        form = base_form(request.POST, instance=item_instance if item_instance else None)

        if form.is_valid() or delete_form:
            form.save()
            return redirect(redirect_url)

    context = {'form': form}
    if additional_data:
        context.update(additional_data)

    return render(request, base_url, context)
