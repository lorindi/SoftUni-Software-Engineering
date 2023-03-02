number = int(input())

# валидно: [100…200] или е 0 -> нищо
# невалидно:                 -> invalid
valid = 100 <= number <= 200 or number == 0
# valid e True -> ако числото е валидно
# valid e False -> ако числото е невалидно
if not valid:
    print("invalid")