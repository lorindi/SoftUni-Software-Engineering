n = int(input())
sum_even = 0
sum_odd = 0

# първите n числа и ги сумираме
for number in range(1, n + 1):
    value = int(input())
    if number % 2 == 0:
        sum_even += value
    else:
        sum_odd += value

if sum_even == sum_odd:
    print('Yes')
    print(f'Sum = {sum_odd}')
else:
    print('No')
    print(f'Diff = {abs(sum_even - sum_odd)}')