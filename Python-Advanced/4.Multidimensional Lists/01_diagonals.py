size = int(input())
matrix = []
for _ in range(size):

    matrix.append([int(x) for x in input().split(', ')])
primary_diagonal = []
secondary_diagonal = []
for index in range(size):
    primary_diagonal.append(matrix[index][index])
    secondary_diagonal.append(matrix[index][size - 1 -index])
print(f"Primary diagonal: {', '.join([str(el) for el in primary_diagonal])}. Sum: {sum(primary_diagonal)}")
print(f"Secondary diagonal: {', '.join([str(el) for el in secondary_diagonal])}. Sum: {sum(secondary_diagonal)}")

