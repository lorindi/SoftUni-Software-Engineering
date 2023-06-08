size = int(input())
matrix = []
bunny_row = 0
bunny_col = 0

for row in range(size):
    row_elements = input().split()
    for col in range(size):
        if row_elements[col] == 'B':
            bunny_row = row
            bunny_col = col
    matrix.append(row_elements)
directions = {
    'right': lambda r, c: (r, c + 1),
    'left': lambda r, c: (r, c - 1),
    'up': lambda r, c: (r - 1, c),
    'down': lambda r, c: (r + 1, c)
}

best_sum = float('-inf')
best_dir = ''
best_path = []
for direction in directions:
    # print(f"Direction: {direction}")
    current_sum = 0
    row, col = directions[direction](bunny_row, bunny_col)
    current_path = []
    while 0 <= row < size and 0 <= col < size and matrix[row][col] != 'X':
        current_sum += int(matrix[row][col])
        current_path.append([row, col])
        row, col = directions[direction](row, col)
    if current_sum > best_sum and current_path:
        best_sum = current_sum
        best_dir = direction
        best_path = current_path

print(best_dir)
print(*best_path, sep='\n')
print(best_sum)

