from .celery import app as celery_app

__all__ = ('celery_app',)

# 1. Install **celery**
# 2. Register **celery** in `INSTALLED_APPS`
# 3. Set `BROKER_URL`
# 4. Create `celery.py`
# 5. project's `__init__.py` register **celery**
# 6. Create `shared_task`s
