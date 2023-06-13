matrix = []

for _ in range(6):
    matrix.append(input().split())

row, col = eval(input())


def validation(matrix, row, col, direction):
    positions = {
        'up': [row - 1, col],
        'down': [row + 1, col],
        'left': [row, col - 1],
        'right': [row, col + 1]
    }

    new_row, new_col = positions[direction]

    if 0 <= row < len(matrix) and 0 <= col < len(matrix):
        return new_row, new_col


while True:
    command = input()
    if command == 'Stop':
        break

    if 'Create' in command:
        _, direction, value = command.split(', ')
        row, col = validation(matrix, row, col, direction)
        if matrix[row][col] == '.':
            matrix[row][col] = value

    elif 'Update' in command:
        _, direction, value = command.split(', ')
        row, col = validation(matrix, row, col, direction)
        if matrix[row][col].isalnum() or matrix[row][col].isdigit():
            matrix[row][col] = value

    elif 'Delete' in command:
        direction = command.split(', ')[1]
        row, col = validation(matrix, row, col, direction)
        if matrix[row][col].isalnum() or matrix[row][col].isdigit():
            matrix[row][col] = '.'
    elif 'Read' in command:
        direction = command.split(', ')[1]
        row, col = validation(matrix, row, col, direction)
        if matrix[row][col].isalnum() or matrix[row][col].isdigit():
            print(matrix[row][col])

for row in matrix:
    print(*row)