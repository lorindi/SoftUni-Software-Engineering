# result = list(filter(lambda x: x % 2 == 0, list(map(int,input().split(' ')))))
# print(result)

#
#
# numbers = input().split()
# numbers_as_digits = list()
# for number in numbers:
#     numbers_as_digits.append(int(number))
# is_even = lambda x: x % 2 == 0
# result = list(filter(is_even,numbers_as_digits))
# print(result)


# def check_even(number):
#     if number % 2 == 0:
#         return True
#
#     return False
#
# result = filter(check_even,list(map(int,input().split(' '))))
# print(list(result))


numbers = input().split()
numbers_as_digits = list()
for number in numbers:
    numbers_as_digits.append(int(number))
is_even = lambda x: x % 2 == 0
result = list(filter(is_even, numbers_as_digits))
print(result)