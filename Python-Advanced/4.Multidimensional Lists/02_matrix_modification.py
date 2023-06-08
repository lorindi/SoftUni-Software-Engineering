size = int(input())
matrix = []
for _ in range(size):
    matrix.append([int(x) for x in input().split()])

while True:
    line = input()
    if line == 'END':
        break
    parts = line.split()
    command = parts[0]
    row, col, value = [int(x) for x in parts[1:]]

    if row < 0 or col < 0 or row >= size or col >= size:
        print('Invalid coordinates')
        continue
    if command == 'Add':
        matrix[row][col] += value
    else:
        matrix[row][col] -= value

for row in matrix:
    print(*row, sep=' ')