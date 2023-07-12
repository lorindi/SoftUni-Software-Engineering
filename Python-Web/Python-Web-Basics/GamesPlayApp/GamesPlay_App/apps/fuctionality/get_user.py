def get_user(profile_model):

    try:
        return profile_model.objects.all()
    except profile_model.DoesNotExist as ex:
        return None
