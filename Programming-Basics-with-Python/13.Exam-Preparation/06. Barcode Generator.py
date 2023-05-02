start_number = int(input())
end_number = int(input())

# всички числа от start_number до end_number
for number in range (start_number, end_number + 1):
    # проверка дали всички цифри от числото за нечетни
    # 4567
    units = number % 10 # единиците
    tens = number // 10 % 10 # десетиците
    hundreds = number // 100 % 10 # стотиците
    thousands = number // 1000 # хилядни

    if units % 2 != 0 and tens % 2 != 0 and hundreds % 2 != 0 and thousands % 2 != 0:
        print(number, end=" ")
