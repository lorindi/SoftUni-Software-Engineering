number = int(input())
p1 = 0
p2 = 0
p3 = 0
p4 = 0
p5 = 0

for _ in range(number):
    current_number = int(input())

    if current_number < 200:
        p1 += 1
    elif 200 <= current_number <= 399:
        p2 += 1
    elif 400 <= current_number <= 599:
        p3 += 1
    elif 600 <= current_number <= 799:
        p4 += 1
    elif current_number >= 800:
        p5 += 1

p1 = p1 / number * 100
p2 = p2 / number * 100
p3 = p3 / number * 100
p4 = p4 / number * 100
p5 = p5 / number * 100

print(f'{p1:.2f}%')
print(f'{p2:.2f}%')
print(f'{p3:.2f}%')
print(f'{p4:.2f}%')
print(f'{p5:.2f}%')
