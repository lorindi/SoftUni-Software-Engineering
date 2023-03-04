screening_type = input()
rows = int(input())
columns = int(input())

all_places = rows * columns
profit = 0

if screening_type == 'Premiere':
    profit = all_places * 12
elif screening_type == 'Normal':
    profit = all_places * 7.50
elif screening_type == 'Discount':
    profit = all_places * 5

print(f'{profit:.2f} leva')