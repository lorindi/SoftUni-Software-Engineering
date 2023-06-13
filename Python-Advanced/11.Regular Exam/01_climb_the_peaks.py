from  collections import deque

daily_portions_of_food_supplies = [int(el) for el in input().split(', ')]
quantities_of_the_daily_stamina = deque([int(el) for el in input().split(', ')])

difficulty_level = deque(['Vihren', 'Kutelo', 'Banski Suhodol', 'Polezhan', 'Kamenitza'])
level = {'Vihren': 80, 'Kutelo': 90, 'Banski Suhodol': 100, 'Polezhan': 60, 'Kamenitza':  70}
mountain_peaks = []

while daily_portions_of_food_supplies and quantities_of_the_daily_stamina and difficulty_level:

    portions = daily_portions_of_food_supplies.pop()
    stamina = quantities_of_the_daily_stamina.popleft()

    sum = portions + stamina

    difficulty = difficulty_level.popleft()
    if sum >= level[difficulty]:
        mountain_peaks.append(difficulty)
    else:
        difficulty_level.appendleft(difficulty)


if len(level) == len(mountain_peaks):
    print("Alex did it! He climbed all top five Pirin peaks in one week -> @FIVEinAWEEK")

else:
    print("Alex failed! He has to organize his journey better next time -> @PIRINWINS")
if mountain_peaks:
    print(f'Conquered peaks:')
    for el in mountain_peaks:
        print(el)