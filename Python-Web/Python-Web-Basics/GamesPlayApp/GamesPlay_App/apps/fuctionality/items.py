def get_all_items(model_data=''):
    return model_data.objects.all().order_by('pk')


def find_item(model_data='', pk=''):
    return model_data.objects.filter(pk=pk).get()
