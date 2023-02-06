# 1. read int number
# 2. проверка дали е четно или нечетно
# ако е четно -> even
# ако е нечетно -> odd
number = int(input())

if number % 2 == 0:
    print('even')
else: # number % 2 != 0
    print('odd')
