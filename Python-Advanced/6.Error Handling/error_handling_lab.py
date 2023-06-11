# while True:
# a = 5
#
# print 'a'
#
# a == {'a': 1}


# a = int(input())
# b = int(input())
# while b == 0:
#     print('second param can not be null')
#     b = int(input())
# print(a/b)


# a = [1, 2, 3]
# print(a[4])


# while True:
# a= 5


# a = input().split()
# index = int(input())
# while index not in range(len(a)):
#     print('Invalid index')
#     index = int(input())
# print(a[index])


# print(3 * 'asd')
# print('asd' + 2)

#Грешна задача 1.	So Many Exceptions
# numbers_list = input().split(", ")
# result = 0
#
# for i in range(numbers_list):
#     number = numbers_list[i + 1]
#     if number < 5:
#         result *= number
#     elif number > 5 and number > 10:
#         result /= number
#
# print(result)



# #Поправена задача 1.	So Many Exceptions
# numbers_list = [int(el )for el in input().split(", ")]
# result = 1
#
# for i in range(len(numbers_list)):
#     number = numbers_list[i]
#     if number <= 5:
#         result *= number
#     elif number > 5:
#         result /= number
#
# print(result)


# a = int(input())
# b = int(input())
# if b == 0:
#     raise ValueError("Zero can not be your second param")
# print(a/b)
# input - 5, 0


# a = int(input())
# b = int(input())
# class PaymentProviderError(Exception):
#     pass
# if b == 0:
#     raise PaymentProviderError("Payment provider is not available at the moment")
# print(a/b)
# input - 5, 0



# class ValueCannotBeNegative(Exception):
#     pass
# for _ in range(5):
#     number = int(input())
#     if number < 0:
#         raise ValueCannotBeNegative("The integer you provided is not a positive number")


# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         y = int(input("Please enter a number: "))
#         print(x/y)
#         break
#     except ValueError:
#         print("Oops!  That was no valid number.  Try again...")
#     except ZeroDivisionError:
#         print("Oops!  Second number can not be zero.  Try again...")


# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         y = int(input("Please enter a number: "))
#         print(x/y)
#         break
#     except (ValueError, ZeroDivisionError):
#         print("Invalid data")


# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         y = int(input("Please enter a number: "))
#         print(x/y)
#         break
#     except (ValueError, ZeroDivisionError):
#         print("Invalid data")
#     finally:
#         print("Finally clause")
# print("End")


# while True:
#     try:
#         x = int(input("Please enter a number: "))
#         y = int(input("Please enter a number: "))
#         print(x/y)
#         break
#     except Exception as ex:
#         print("Invalid data")
#     finally:
#         print("Finally clause")
# print("End")


# #2.	Repeat Text
# text = input()
# try:
#     n = int(input())
#     print(text * n)
# except ValueError:
#     print("Variable times must be an integer")
# # else:
# #     print(text * n)


# a = [int(el) for el in input().split()]
# index = int(input())
# try:
#     print(a[index])
# except IndexError:
#     print('Invalid index')

# a = [int(el) for el in input().split()]
# index = int(input())
# while True:
#     try:
#         print(a[index])
#         break
#     except IndexError:
#         print("Invalid index. Please try again")


a = {'a': 1, 'b': 2}
key = input()
while True:
    try:
        print(a[key])
        break
    except KeyError:
        print("Invalid index. Please try again")
        key = input()


















