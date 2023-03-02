age = float(input())
gender = input()

# gender -> m или f
if gender == 'm':
    # age -> < 16 или >= 16
    if age < 16:
        print("Master")
    else:
        print("Mr.")
elif gender == 'f':
    # age -> < 16 или >= 16
    if age < 16:
        print("Miss")
    else:
        print("Ms.")