first_number = int(input())
second_number = int(input())
third_number = int(input())

if second_number < first_number and third_number < first_number:
    print(first_number)
elif first_number < second_number and third_number < second_number:
    print(second_number)
else:
    print(third_number)