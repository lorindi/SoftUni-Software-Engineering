def capitals():
    countries_data = input().split(', ')
    capitals_data = input().split(', ')
    result = dict(zip(countries_data, capitals_data))

    for country, capital in result.items():
        print(f'{country} -> {capital}')

capitals()