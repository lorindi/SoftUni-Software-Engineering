# 1. read int number
# 2. няколко проверки
# < 100 -> "Less than 100"
# между 100 и 200 -> "Between 100 and 200"
# > 200 -> "Greater than 200"
number = int(input())

if number < 100:
    print("Less than 100")
elif 100 <= number <= 200:
    print("Between 100 and 200")
elif number > 200:
    print("Greater than 200")