n = int(input())
# обходим всички стойности на x1 от 0 до n
count = 0
for x1 in range (0, n + 1):
    for x2 in range (0, n + 1):
        for x3 in range (0, n + 1):
            if x1 + x2 + x3 == n:
                #валидна
                count += 1

print(count)