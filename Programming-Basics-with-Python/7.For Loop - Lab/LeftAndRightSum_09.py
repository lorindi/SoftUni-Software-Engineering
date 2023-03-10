# лява сума -> сбор от първите n числа
# дясна сума -> сбор от вторите  n числа

n = int(input())
left_sum = 0
right_sum = 0

# първите n числа
for number in range (1, n + 1):
    value = int(input())
    left_sum += value


# вторите n числа
for number in range (1, n + 1):
    value = int(input())
    right_sum += value

# лявата и дясната сума
if left_sum == right_sum:
    print(f"Yes, sum = {right_sum}")
else:
    print(f"No, diff = {abs(left_sum - right_sum)}")