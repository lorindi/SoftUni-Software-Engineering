# n = int(input())
# matrix = []
#
# for _ in range(n):
#     nums = [int(el) for el in input().split()]
#     matrix.append(nums)
# cols_sum = 0
# for row_index in range(n):
#     for col_index in range(n):
#         if row_index == col_index:
#             cols_sum += matrix[row_index][col_index]
# print(cols_sum)

#2
n = int(input())
matrix = []

for _ in range(n):
    nums = [int(el) for el in input().split()]
    matrix.append(nums)
cols_sum = 0
for index in range(n):
    cols_sum += matrix[index][index]
print(cols_sum)
