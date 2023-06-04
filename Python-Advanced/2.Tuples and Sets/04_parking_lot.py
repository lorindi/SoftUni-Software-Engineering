n = int(input())
cars = set()

for _ in range(n):
    direction, car_number = input().split(', ')
    if direction == 'IN':
        cars.add(car_number)
    elif direction == 'OUT':
        cars.remove(car_number)
if cars:
    print('\n'.join(cars))
else:
    print('Parking Lot is Empty')

#2
a = {1, 2, 3}
a.remove(5)
print(a)


