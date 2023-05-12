def calculator(a,b,operator):
    if operator == 'multiply':
        return a * b
    elif operator == 'divide':
        return int(a / b)
    elif operator == 'add':
        return a + b
    elif operator == 'subtract':
        return a - b

# current_operator = input()
# first_number = int(input())
# second_number = int(input())
#
# print(calculator(first_number,second_number,current_operator))
print(calculator(operator = input(), a = int(input()),b=int(input())))