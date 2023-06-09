def even_odd_filter(**kwargs):
    result = {}

    for key, value in kwargs.items():
        parity = 0 if key == 'even' else 1
        filtered = [el for el in value if el % 2 == parity]
        result[key] = filtered
    # return dict(sorted(result.items(), key=lambda x: -len(x[1])))
    return {key: value for key, value in sorted(result.items(), key=lambda x: - len(x[1]))}



print(even_odd_filter(
    odd=[1, 2, 3, 4, 10, 5],
    even=[3, 4, 5, 7, 10, 2, 5, 5, 2],
))
