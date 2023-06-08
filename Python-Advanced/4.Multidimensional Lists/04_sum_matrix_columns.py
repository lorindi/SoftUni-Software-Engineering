rows, cols = [int(el) for el in input().split(', ')]
matrix = []
for _ in range(rows):
    nums = [ int(el) for el in input().split()]
    matrix.append(nums)

for col_index in range(cols):
    res = 0
    for row_index in range(rows):
        res += matrix[row_index][col_index]
    print(res)

