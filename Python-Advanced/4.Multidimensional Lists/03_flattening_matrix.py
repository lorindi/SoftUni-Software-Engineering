# rows = int(input())
# result = []
# for _ in range(rows):
#     nums = [int(el) for el in input().split(', ')]
#     result.extend(nums)
# print(result)

rows = int(input())
matrix = []
for _ in range(rows):
    nums = [int(el) for el in input().split(', ')]
    matrix.append(nums)
result = []
for row_index in range(len(matrix)):
    for col_index in range(len(matrix[row_index])):
        result.append(matrix[row_index][col_index])
print(result)