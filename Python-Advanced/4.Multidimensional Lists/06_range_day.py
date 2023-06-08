def get_next_pos(row, col, direction, steps):
    if direction == 'up':
        return row - steps, col
    if direction == 'down':
        return row + steps, col
    if direction == 'left':
        return row, col - steps
    if direction == 'right':
        return row, col + steps


def is_inside(row, col, size):
    return 0 <= row < size and 0 <= col < size


size = 5
player_row = 0
player_col = 0
targets = 0

matrix = []

for row in range(size):
    row_elements = input().split()
    for col in range(size):
        if row_elements[col] == 'A':
            player_row = row
            player_col = col
        elif row_elements[col] == 'x':
            targets += 1
    matrix.append(row_elements)

matrix[player_row][player_col] = '.'
hit_targets = []

n = int(input())
for _ in range(n):
    command_parts = input().split()
    command = command_parts[0]
    direction = command_parts[1]

    if command == 'move':
        steps = int(command_parts[2])
        next_row, next_col = get_next_pos(player_row, player_col, direction, steps)

        if is_inside(next_row, next_col, size) and matrix[next_row][next_col] == '.':
            player_row, player_col = next_row, next_col
    else:
        bullet_row, bullet_col = get_next_pos(player_row, player_col, direction, 1)
        while is_inside(bullet_row, bullet_col, size):
            if matrix[bullet_row][bullet_col] == 'x':
                targets -= 1
                matrix[bullet_row][bullet_col] = '.'
                hit_targets.append([bullet_row, bullet_col])
                break
            bullet_row, bullet_col = get_next_pos(bullet_row, bullet_col, direction, 1)
        if targets == 0:
            break
if targets == 0:
    print(f"Training completed! All {len(hit_targets)} targets hit.")
else:
    print(f"Training not completed! {targets} targets left.")

print(*hit_targets, sep='\n')
