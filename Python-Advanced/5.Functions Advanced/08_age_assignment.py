def age_assignment(*args, **kwargs):
    result = {}

    for name in args:
        first_letter = name[0]
        age = kwargs[first_letter]
        result[name] = age

    sorted_result = [f'{key} is {value} years old.' for key, value in sorted(result.items(), key=lambda x: x[0])]
    return '\n'.join(sorted_result

print(age_assignment("Peter", "George", G=26, P=19))