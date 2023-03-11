import sys

n = int(input())
# за всяко число от първото до n-тото
# начало: 1 (първото число)
# край: n (последното число)
# промяна: +1
# повтарям: прочитам стойност от конзолата + проверка дали е макс

max = -sys.maxsize # моментния максимум
min = sys.maxsize # моментния минимум
for number in range (1, n + 1):
    value = int(input())
    # проверка дали е макс
    if value > max:
        max = value
    # проверка дали е мин
    if value < min:
        min = value

print(f"Max number: {max}")
print(f"Min number: {min}")

