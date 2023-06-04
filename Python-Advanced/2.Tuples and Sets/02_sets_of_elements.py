m, n = [int(x) for x in input().split()]
first = set()
second = set()

for _ in range(m):
    first.add(int(input()))
for _ in range(n):
    second.add(int(input()))
common_nums = first.intersection(second)
for num in common_nums:
    print(num)

#2
first_number, second_number = [int(el) for el in input().split()]
first_set = set(int(input()) for _ in range(first_number))
second_set = set(int(input()) for _ in range(second_number))
result = first_set & second_set
print(*result, sep='\n')