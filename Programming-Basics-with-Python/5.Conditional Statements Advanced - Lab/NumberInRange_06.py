number = int(input())

# Yes -> 1. [-100, 100] и 2. различно от 0
# No
#1. -100 <= number <= 100
#2. number != 0

if -100 <= number <= 100 and number != 0:
    print("Yes")
else:
    print("No")