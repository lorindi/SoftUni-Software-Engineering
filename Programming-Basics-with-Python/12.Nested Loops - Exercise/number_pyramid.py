number = int(input())
current_number = 1
condition = False

for row in range(1, number + 1):
    for col in range(1, row + 1):

        if current_number > number:
            condition = True
            break
        print(current_number, end=' ')
        current_number += 1

    if condition:
        break
    print()