def grocery_store(**kwargs):
    sorted_result = [f'{key}: {value}' for key, value in sorted(kwargs.items(), key=lambda x: (-x[1], -len(x[0]), x[0]))]
    return '\n'.join(sorted_result)


print(grocery_store(
    abread=12,
    apasta=5,
    eeeggs=5,
))
