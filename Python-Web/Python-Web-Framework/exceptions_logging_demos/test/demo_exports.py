import importlib

mod = importlib.import_module('test_1')
for (key, value) in mod.__dict__.items():
    if key.startswith('My') \
            and key.endswith('TestCase'):
        print(key)
        print(value)
