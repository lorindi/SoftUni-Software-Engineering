import sys
n = int(input())
value = 0
max_value = -sys.maxsize
min_value = sys.maxsize

previous_value = 0
counter_for_equals_values = 0

for i in range(1, n + 1):
    n1 = int(input())
    n2 = int(input())

    if (n1 + n2) > max_value:
        max_value = (n1 + n2)
    if (n1 + n2) < min_value:
        min_value = (n1 + n2)

    if previous_value == (n1 + n2) or i == 1:
        counter_for_equals_values += 1
        previous_value = n1 + n2


if counter_for_equals_values == n:
    print(f"Yes, value={previous_value}")
else:
    diff = max_value - min_value
    print(f"No, maxdiff={int(diff)}")