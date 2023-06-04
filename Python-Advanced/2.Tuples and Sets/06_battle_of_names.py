n = int(input())
list_even = set()
list_odd = set()
sum_even = 0
sum_odd = 0
for num in range(1, n + 1):
    result = 0
    name = input()
    for letter in name:
        result += ord(letter)
    data = int(result / num)

    if data % 2 == 0:
        list_even.add(data)
        sum_even += data
    else:
        list_odd.add(data)
        sum_odd += data
if sum_even == sum_odd:
    total_result = list_even & list_odd
    print(*total_result, sep=', ')

elif sum_odd > sum_even:
    total_result = list_odd - list_even
    print(*total_result, sep=', ')

else:
    total_result = list_even | list_odd
    print(*total_result, sep=', ')

