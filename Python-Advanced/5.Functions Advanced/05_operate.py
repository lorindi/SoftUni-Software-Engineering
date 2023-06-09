from functools import reduce


def operate(operator, *args):
    result = 0
    if operator == '+':
        result = reduce(lambda x, y: x + y, args)
    elif operator == '-':
        result = reduce(lambda x, y: x - y, args)
    elif operator == '*':
        result = reduce(lambda x, y: x * y, args)
    elif operator == '/':
        result = reduce(lambda x, y: x / y, args)

    return result

print(operate('+', 1, 2, 3))
#2
def operate(sing, *args):
    return reduce(lambda  x, y: eval(f"{x} {sing} {y}"), args)


print(operate('+', 1, 2, 3))
