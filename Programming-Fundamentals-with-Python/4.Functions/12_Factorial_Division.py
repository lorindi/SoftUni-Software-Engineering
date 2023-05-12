def calculation(first_number,second_number):
    for factorial in range(1, first_number):
        first_number *= factorial
    for factorial in range(1, second_number):
        second_number *= factorial
    result = first_number / second_number
    return f'{result:.2f}'

first_number = int(input())
second_number = int(input())
print(calculation(first_number,second_number))
