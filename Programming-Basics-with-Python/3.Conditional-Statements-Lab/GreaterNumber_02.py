# 1. прочитам две цели числа
# 2. проверка кое е по-голямо
# първото >= второто -> печатаме първото
# второто > първото -> печатаме второто

first_number = int(input())
second_number = int(input())

if first_number >= second_number:
    print(first_number)
else:        # first < second
    print(second_number)