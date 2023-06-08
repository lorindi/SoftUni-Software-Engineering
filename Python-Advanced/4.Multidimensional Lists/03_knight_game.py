def find_count(board, row, col):
    moves = [
        [row - 2, col - 1],
        [row - 2, col + 1],
        [row - 1, col - 2],
        [row - 1, col + 2],
        [row + 1, col - 2],
        [row + 1, col + 2],
        [row + 2, col - 1],
        [row + 2, col + 1]
    ]
    result = 0
    for r, c in moves:
        if 0 <= r < len(board) and 0 <= c < len(board) and board[r][c] == 'K':
            result += 1
    return result


size = int(input())
board = []
for _ in range(size):
    board.append(list(input()))
removed_knights_counter = 0
while True:
    best_count = 0
    knight_row = 0
    knight_col = 0

    for row in range(size):
        for col in range(size):
            if board[row][col] == '0':
                continue
            count = find_count(board, row, col)
            if count > best_count:
                best_count = count
                knight_row = row
                knight_col = col
    if best_count == 0:
        break

    board[knight_row][knight_col] = '0'
    removed_knights_counter += 1

print(removed_knights_counter)
