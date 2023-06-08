def get_next_pos(row, col, direction):
    if direction == 'up':
        return  row - 1, col
    if direction == 'down':
        return  row + 1, col
    if direction == 'left':
        return  row, col - 1
    if direction == 'right':
        return  row, col + 1


size = int(input())
matrix = []

alice_row = 0
alice_col = 0

for row in range(size):
    row_elements = input().split()
    for col in range(size):
        if row_elements[col] == 'A':
            alice_row = row
            alice_col = col
    matrix.append(row_elements)

tea_bags = 0

while tea_bags < 10:
    matrix[alice_row][alice_col] = '*'

    direction = input()
    next_row, next_col = get_next_pos(alice_row, alice_col, direction)


    if next_row < 0 or next_col < 0 or next_row >= size or next_col >= size:
        break
    alice_row, alice_col = next_row, next_col

    if matrix[alice_row][alice_col] == '.' or matrix[alice_row][alice_col] == '*':
        continue
    if matrix[alice_row][alice_col] == 'R':
        break
    tea_bags += int(matrix[alice_row][alice_col])
matrix[alice_row][alice_col] = '*'
if tea_bags >= 10:
    print("She did it! She went to the party.")
else:
    print("Alice didn't make it to the tea party.")
for row in matrix:
    print(*row, sep=' ')
