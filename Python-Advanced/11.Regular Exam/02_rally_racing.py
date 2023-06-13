# def tunnel(row, col, size, matrix):
#     is_fine = False
#
#     # for idx, row in enumerate(matrix):
#     #     if 'T' in row:
#     #         next_row, next_col = idx, row.index('T')
#
#     for rows in range(size):
#         for cols in range(size):
#
#             if row != rows and col != cols:
#                 if matrix[rows][cols] == 'T':
#
#                     row = rows
#                     col = cols
#                     is_fine = True
#
#                     return row, col, is_fine
#     return row, col, is_fine


size = int(input())
racing_number = input()
row, col = 0, 0
distance = 0

matrix = [input().split() for i in range(size)]

position = matrix[row][col]

is_finished = False

commands = {
    'left': (0, -1),
    'right': (0, +1),
    'up': (-1, 0),
    'down': (+1, 0)
}



command = input()
while command != 'End':
    position = matrix[row][col]

    if position == 'T':
        matrix[row][col] = '.'

        # row, col, is_fine = tunnel(row, col, size, matrix)
        for idx, r in enumerate(matrix):
            if 'T' in r:
                row, col = idx, r.index('T')
                matrix[row][col] = '.'
                distance += 30

        # if is_fine:
        #     matrix[row][col] = '.'
        #     distance += 30

    elif position == 'F':
        matrix[row][col] = 'C'
        is_finished = True
        break

    elif position == '.':
        distance += 10


    if command in commands.keys():
        row += commands[command][0]
        col += commands[command][1]

    command = input()


matrix[row][col] = 'C'

if is_finished:
    print(f"Racing car {racing_number} finished the stage!")
else:
    print(f"Racing car {racing_number} DNF.")

print(f"Distance covered {distance} km.")

for i in matrix:
    print(*i, sep='')
