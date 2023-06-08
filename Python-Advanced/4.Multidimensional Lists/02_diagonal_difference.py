size = int(input())
matrix = []
for _ in range(size):
    matrix.append([int(x) for x in input().split()])
primary_diagonal = []
secondary_diagonal = []
for index in range(size):
    primary_diagonal.append(matrix[index][index])
    secondary_diagonal.append(matrix[index][size - 1 - index])
print(abs(sum(primary_diagonal) - sum(secondary_diagonal)))