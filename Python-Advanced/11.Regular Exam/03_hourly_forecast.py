def forecast(*args):
    result = ''
    sunny_weather, cloudy_weather, rainy_weather = {}, {}, {}

    for location, weather in args:
        if weather == 'Sunny':
            sunny_weather[location] = weather
        elif weather == 'Cloudy':
            cloudy_weather[location] = weather
        elif weather == 'Rainy':
            rainy_weather[location] = weather

    for key, value in sorted(sunny_weather.items(), key=lambda x: x[0]):
        result += f'{key} - {value}' + '\n'
    for key, value in sorted(cloudy_weather.items(), key=lambda x: x[0]):
        result += f'{key} - {value}' + '\n'
    for key, value in sorted(rainy_weather.items(), key=lambda x: x[0]):
        result += f'{key} - {value}' + '\n'

    return result


print(forecast(
    ("Sofia", "Sunny"),
    ("London", "Cloudy"),
    ("New York", "Sunny")))