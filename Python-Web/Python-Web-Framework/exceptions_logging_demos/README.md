# Exception Handling and Logging in Django

## Introduction

Exceptions and errors are an inevitable part of writing code. Things will go wrong or unexpected events will occur, and our code needs to be prepared to handle these cases gracefully. In this tutorial, we will learn about exceptions and logging in Django and how to leverage them to make our applications more robust and stable.

## Exceptions vs Errors

Before diving into Django-specific exceptions, let's understand the difference between exceptions and errors in general:

- **Exceptions** - These are raised when some internal event occurs that disturbs the normal flow of the program. They can be detected at runtime by the programming language's executive or the operating system. With exceptions, we can deal with the problem without letting the whole system come to a halt.

- **Errors** - Errors cause the whole system execution to stop. The program will cease to execute when an error is encountered. We have to detect errors and make appropriate code changes to prevent them from happening again.

So in summary, exceptions allow our program to continue executing while errors stop execution entirely.

## Django Exceptions

Django defines a number of custom exception classes that inherit from Python's built-in `Exception` class. When an exception occurs in Django, it will be an instance of one of these Django-specific exception classes or a standard Python exception class.

Some common Django exception classes include:

- `ObjectDoesNotExist` - Raised when querying for an object that does not exist in the database. This is the base class for `Model.DoesNotExist` exceptions.

- `MultipleObjectsReturned` - Raised when a query returns more than one object unexpectedly. This is the base class for `Model.MultipleObjectsReturned`.

- `ViewDoesNotExist` - Raised when a requested view does not exist.

- `MiddlewareNotUsed` - Raised when a particular middleware is not listed in the `MIDDLEWARE` setting.

- `ValidationError` - Raised when data fails validation, such as in forms.

- `Resolver404` - Raised when a URL path cannot be mapped to a valid view.

- `NoReverseMatch` - Raised when reverse URL resolution fails.

There are many other Django core, database, form, and view exceptions. See the [full list in the Django documentation](https://docs.djangoproject.com/en/4.1/ref/exceptions/) for details.

## Handling Exceptions

Now that we know about exceptions, let's look at how to handle them in our Django code. Here are some reasons why it's important to handle exceptions:

- It maintains the normal flow of the program when unexpected events occur.

- If left unhandled, exceptions could cause the program to crash or requests to fail.

- Handling exceptions makes the user experience more robust by preventing unexpected crashes.

- It prevents loss of data due to crashes.

The primary way we handle exceptions is with Python's `try` and `except` blocks:

```python
try:
  # Some code that might raise an exception
  
except SomeException:
  # Code to handle the exception
```

When an exception occurs in the `try` block, Python will check if there is an `except` block matching that exception type in the code following it. If a match is found, the exception will be handled there. Some things we can do in the `except` block:

- Handle the exception and do something else:

```python
try:
  user = User.objects.get(username=username)  
except User.DoesNotExist:
  user = User.objects.create(username=username) 
```

Here we create the missing user if the lookup fails.

- Catch and re-raise the exception to add context:

```python
try:
  user = User.objects.get(username=username)
except User.DoesNotExist as exc:
  raise User.DoesNotExist(
    "User does not exist. Please create a user first."
  ) from exc
```

- Catch and log the exception:

```python
try:
  user = User.objects.get(username=username)  
except User.DoesNotExist:
  logger.exception("User lookup failed")
```

This will log the exception with a full stack trace.

If an exception goes unhandled, Django provides a default exception handler that will convert it into an HTTP 500 response. So exceptions don't necessarily need to be handled explicitly.

## Avoiding Invisible Exception Handling

It may be tempting to hide exception handling like this:

```python
try:
  do_something()  
except:
  pass
```

But this is an anti-pattern! It suppresses any exceptions and makes it impossible to see failures that occur in production. Always handle exceptions explicitly.

## Logging with Django

Logging provides insight into runtime information in your application to aid debugging and troubleshooting. The main reasons to log information are:

- Debug during development

- Understand errors and performance issues in production

- Enable easier troubleshooting without deep code analysis

- Learn about application health and state

Django uses Python's built-in `logging` module to perform system logging. Logging is configured in the `LOGGING` setting:

```python
# settings.py

LOGGING = {
  # ... logging config ...  
}
```

Some key concepts:

- **Log Levels**: Logging severity levels in increasing order are: DEBUG, INFO, WARNING, ERROR, CRITICAL.

- **Loggers**: Generate log records that include information about the event.

- **Handlers**: Send log records to output destinations like console or file.

- **Filters**: Provide additional control over which records are output.

- **Formatters**: Define final output formatting of log records as text.

Let's look at a sample logging configuration:

```python
# settings.py

LOGGING = {
  'version': 1,
  'disable_existing_loggers': False,

  'formatters': {
    'simple': {
        'format': '{asctime} {levelname} {message}',
        'style': '{'
    },
  },

  'handlers': {
    'console': {
        'level': 'DEBUG', 
        'class': 'logging.StreamHandler',
        'formatter': 'simple'
    },
  },
  
  'loggers': {
    'django': {
        'handlers': ['console'],
        'propagate': True, 
    }
  }
}
```

This configures a simple formatter, a console handler, and the default Django logger. The console handler will output DEBUG and above messages to the console in a simple text format.

Django provides some builtin loggers like `django` and `django.request` that we can use out of the box. We can also create custom loggers in our code.

### Log Handlers in Django

In addition to loggers and formatters, Django logging relies on log handlers to specify where the log output is sent. The default handler in Django sends logs to the console stdout, but we can configure other handlers as needed.

Some common built-in log handler classes in Django include:

- `logging.StreamHandler` - Sends logs to a stream, usually stdout/stderr console. This is the default handler in Django.

- `logging.FileHandler` - Sends logs to a file on disk. We need to specify the file name. Example:

```python
LOGGING = {
  #...

  'handlers': {
    'file': {
        'level': 'DEBUG',
        'class': 'logging.FileHandler',
        'filename': '/var/logs/myapp.log',
        'formatter': 'simple'
    }
  }
}
```

- `logging.SMTPHandler` - Sends logs via email using an SMTP server. We need to configure the SMTP host, credentials, from/to addresses etc.

- `logging.SysLogHandler` - Sends logs to a Unix syslog service.

- `logging.DatagramHandler` - Sends logs over UDP.

- `django.utils.log.AdminEmailHandler` - Sends logs via email to site admins.

We can also write custom log handlers by subclassing `logging.Handler`.

Some key points about handlers:

- Multiple handlers can be used in the same configuration. For example, we may want to log DEBUG/INFO to console, ERROR to file, and CRITICAL via email.

- Each handler can have its own log level. So console can log DEBUG while file handler only logs ERROR or above.

- Handlers must have a formatter configured to render the final output.

- Try to log to files or external services in production instead of console.

Let's look at an example config using a file handler:

```python
LOGGING = {
  # ...

  'handlers': {
    'file': {
      'level': 'DEBUG',
      'class': 'logging.FileHandler',
      'filename': '/var/logs/app.log',
      'formatter': 'simple'
    }
  },

  'loggers': {
    'django': {
      'handlers': ['file'],
      'level': 'DEBUG', 
    }
  }
}
```

This will send all Django logs to the `/var/logs/app.log` file. The logs will only contain DEBUG level and above based on the handler config.

Another popular logging service is Loki, which aggregates logs from multiple sources into a centralized system. Django does not have a built-in Loki handler, but we can find a Loki handler library to integrate it:

```python
import loki_python_client

LOGGING = {
  # ...

  'handlers': {
    'loki': {
      'level': 'ERROR',
      'class': 'loki_python_client.LokiHandler',
      'url': 'https://loki.example.com' 
    }
  }
}
```

This allows sending critical application logs to Loki for long-term storage and analysis.

So in summary, handlers give us a lot of flexibility in terms of log destinations in Django. Make sure to pick the appropriate handlers for your application logging needs!

Some key logging tips:

- Only log ACTIONABLE info that can help troubleshoot issues. Don't log everything.

- Use log levels properly. Use DEBUG for development. ERROR or CRITICAL are best for production.

- Handled exceptions should also be logged as they provide context.

- Log to files in production for aggregation and storage.

- Customize logging format if needed using formatters.

- Filter logs to avoid noise or unwanted output.

Here is an extremely detailed section on logging formatters and filters in Django based on the transcript analysis:

### Log Formatters

Log formatters specify how the final log text is formatted before being output by the handler. They allow customizing the log message format.

Django has some built-in formatters we can use like:

- `logging.Formatter` - Generic formatting with timestamp, level name, message etc.

- `django.utils.log.ServerFormatter` - Adds server time and path into format.

- `logging.JSONFormatter` - Outputs logs in JSON format.

We can also define custom formatters. For example:

```python
LOGGING = {
  'formatters': {
    'simple': {
      'format': '{asctime} {levelname} {message}',
      'style': '{'
    }
  },
  
  'handlers': {
    'console': {
      'formatter': 'simple'
    }
  }
}
```

This will output logs in the defined simple format to the console.

Some formatting style options like `{` and `$` determine how the format string is merged.

The formatting string can use special variables like:

- `{asctime}` - Text logging time

- `{levelname}` - Text logging level ('DEBUG', 'INFO', etc.)

- `{message}` - The log message

- `{name}` - Name of logger that logged the message

- `{filepath}` - Path of source file that logged the message

So in summary, formatters allow customizing the final log output as needed.

### Log Filters

Log filters provide additional control over what logs actually get outputted by the handlers. Multiple filters can be chained together for complex logic.

Some built-in filters include:

- `logging.Filter` - Base class to define custom filters.

- `django.utils.log.RequireDebugFalse` - Only output if DEBUG is False.

- `django.utils.log.RequireDebugTrue` - Only output if DEBUG is True.

For example:

```python
'filters': {
    'require_debug_true': {
        '()': 'django.utils.log.RequireDebugTrue',
    }
}

'handlers': {
    'console': {
        'filters': ['require_debug_true'],
    }
}
```

This console handler will only output logs if DEBUG = True.

We can define custom filters by subclassing `logging.Filter` and overriding the `filter` method:

```python
import logging

class MyFilter(logging.Filter):

  def filter(self, record):
    """
    Return True to allow log record to be output, 
    False to prevent it.
    """
    
    # Custom logic here    
    return True
```

Some common uses for custom filters:

- Only allow logs for certain source files.
- Prevent logs without user context if user not logged in.
- Drop logs for certain loggers.
- Only allow WARNING and above in production.

So in summary, filters give granular control over logging output. Make sure to use them wisely!

## Dynamically Loading Python Modules

In some cases, we may want to load Python modules/objects dynamically by name or convention instead of through regular imports. Django leverages Python's `importlib` module to help with dynamic imports.

For example, say we have a module called `demo_exports.py` with the following:

```python
# demo_exports.py

class MyTestCase:
  ...

def some_function():
  ...
```

We can import from this dynamically in another file like:

```python
import importlib

mod = importlib.import_module('demo_exports')
MyTestCase = getattr(mod, 'MyTestCase')

test = MyTestCase()
```

Here's what's happening:

- We import Django's `importlib` module for dynamic loading.

- `import_module('demo_exports')` dynamically imports the module named `demo_exports`.

- This returns a module object `mod` that we can access attributes from.

- `getattr(mod, 'MyTestCase')` gets the `MyTestCase` attribute from the module.

- We can then use this class dynamically.

Another approach is:

```python
from importlib import import_module

mod = import_module('demo_exports')
MyTestCase = mod.MyTestCase
```

We can access any exported classes, functions etc dynamically like this.

Some key points:

- The module needs to be importable by Python's normal import system.

- Use the module's **dict** attribute to access all exports as a dictionary.

- Watch out for circular dependencies between the loading module and target module.

- Prefer static imports whenever possible for better performance.

This is useful in cases like:

- Loading plugins or extensions dynamically.

- Importing models dynamically for Django Admin.

- Building conventions and dynamically loading modules matching a pattern.

Let's look at a conventions example. Say we have views like:

```python
# views/create_post_view.py
# views/list_post_view.py 

# We want to load these dynamically
```

We could do:

```python
import importlib

# Get module dict
modules = importlib.import_module('views').__dict__

# Load modules matching pattern 
for name, val in modules.items():
  if name.startswith('create') and name.endswith('_view'):
    view = getattr(val, name)
    # Register create view
  
  if name.startswith('list') and name.endswith('_view'):  
    view = getattr(val, name)   
    # Register list view
```

This allows dynamically loading views based on naming conventions.