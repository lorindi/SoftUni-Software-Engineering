numbers = input().split(", ")
numbers = list(map(int, numbers))
even_index_numbers = list()

for i in range(len(numbers)):
    if numbers[i] % 2 == 0:
        even_index_numbers.append(i)

print(even_index_numbers)