def next_version(version_number):
    version_number = int(''.join(version_number)) + 1
    result = [str(num) for num in str(version_number)]
    print('.'.join(result))

data = input().split('.')
next_version(data)