month = input()
number_of_nights = int(input())
studio_price = 0
apartment_price = 0

if month in 'May October':
    studio_price = 50
    apartment_price = 65
    if 7 < number_of_nights <= 14:
        studio_price -= studio_price * 0.05
    elif number_of_nights > 14:
        studio_price -= studio_price * 0.30

elif month in 'June September':
    studio_price = 75.20
    apartment_price = 68.70
    if number_of_nights > 14:
        studio_price -= studio_price * 0.20

elif month in 'July August':
    studio_price = 76
    apartment_price = 77

if number_of_nights > 14:
    apartment_price -= apartment_price * 0.10

apartment_price *= number_of_nights
studio_price *= number_of_nights

print(f'Apartment: {apartment_price:.2f} lv.')
print(f'Studio: {studio_price:.2f} lv.')
