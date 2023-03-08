degrees = int(input())
time_of_day = input()
outfit = ''
shoes = ''

if time_of_day == 'Morning':
    if 10 <= degrees <= 18:
        outfit = 'Sweatshirt'
        shoes = 'Sneakers'

    elif 18 < degrees <= 24:
        outfit = 'Shirt'
        shoes = 'Moccasins'

    elif degrees >= 25:
        outfit = 'T-Shirt'
        shoes = 'Sandals'

elif time_of_day == 'Afternoon':
    if 10 <= degrees <= 18:
        outfit = 'Shirt'
        shoes = 'Moccasins'

    elif 18 < degrees <= 24:
        outfit = 'T-Shirt'
        shoes = 'Sandals'

    elif degrees >= 25:
        outfit = 'Swim Suit'
        shoes = 'Barefoot'

elif time_of_day == 'Evening':
    if 10 <= degrees <= 18:
        outfit = 'Shirt'
        shoes = 'Moccasins'

    elif 18 < degrees <= 24:
        outfit = 'Shirt'
        shoes = 'Moccasins'

    elif degrees >= 25:
        outfit = 'Shirt'
        shoes = 'Moccasins'

print(f"It's {degrees} degrees, get your {outfit} and {shoes}.")


