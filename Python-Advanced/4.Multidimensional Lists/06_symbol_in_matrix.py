n = int(input())
matrix = []

for _ in range(n):
    matrix.append(list(input()))

position = None
searched_char = input()

for row_index in range(n):
    for col_index in range(n):
        if searched_char == matrix[row_index][col_index]:
            position = (row_index, col_index)
            print(position)
            break
    if position:
        break
if not position:
    print(f"{searched_char} does not occur in the matrix")