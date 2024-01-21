from django.contrib.auth import get_user_model
from django.db.models.signals import post_save, pre_save
from django.dispatch import receiver

from signals_middlewares_cache_session_demos.web.models import Task

UserModel = get_user_model()


@receiver(pre_save, sender=Task)
def task_to_be_created(*args, **kwargs):
    pass


@receiver(post_save, sender=Task)
def task_created(*args, **kwargs):
    pass


@receiver(post_save, sender=UserModel)
def create_profile(sender, instance, created, **kwargs):
    if created:
        # create `Profile`
        pass


@receiver(post_save, sender=UserModel)
def send_verification_email(sender, instance, created, **kwargs):
    if created:
        # send email
        pass
