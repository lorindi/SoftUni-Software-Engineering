import sys

number = int(input())
max_number = -sys.maxsize
total_sum = 0

for _ in range(number):
    current_number = int(input())

    if current_number > max_number:
        max_number = current_number

    total_sum += current_number

if total_sum - max_number == max_number:
    print('Yes')
    print(f'Sum = {max_number}')
else:
    diff = abs(max_number - (total_sum - max_number))
    print('No')
    print(f'Diff = {diff}')