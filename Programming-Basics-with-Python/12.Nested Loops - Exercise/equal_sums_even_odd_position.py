first_number = int(input())
second_number = int(input())

for num in range(first_number, second_number + 1):
    odd_sum = 0
    even_sum = 0

    for i in range(len(str(num))):

        if i % 2 == 0:
            even_sum += int(str(num)[i])
        else:
            odd_sum += int(str(num)[i])

    if odd_sum == even_sum:
        print(num, end=' ')