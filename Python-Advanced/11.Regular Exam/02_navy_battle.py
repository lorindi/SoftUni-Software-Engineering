size = int(input())

matrix = [[el for el in input()] for i in range(size)]
row = 0
col = 0

for idx, b in enumerate(matrix):
    if 'S' in b:
        row, col = idx, b.index('S')
        matrix[row][col] = '-'
        break

commands = {
    'up': (-1, 0),
    'down': (1, 0),
    'left': (0, -1),
    'right': (0, 1)
}


naval_mine = 0 #2
cruiser = 0 #3

position = matrix[row][col]

command = input()
while True:



    if command in commands:
        row += commands[command][0]
        col += commands[command][1]
        position = matrix[row][col]

    if position == '*':
        matrix[row][col] = '-'
        naval_mine += 1

    elif position == 'C':
        matrix[row][col] = '-'
        cruiser += 1

    if naval_mine == 3:
        break
    if cruiser == 3:
        break

    command = input()


matrix[row][col] = 'S'

if cruiser == 3 and naval_mine < 3:
    print("Mission accomplished, U-9 has destroyed all battle cruisers of the enemy!")
else:
    print(f"Mission failed, U-9 disappeared! Last known coordinates [{row}, {col}]!")

for i in matrix:
    print(*i, sep='')





