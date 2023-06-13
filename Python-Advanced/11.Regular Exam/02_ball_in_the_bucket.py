# def toys(column_sum):
#     result = ''
#     if 100 <= column_sum <= 199:
#         result = 'Football'
#     elif 200 <= column_sum <= 299:
#         result = 'Teddy Bear'
#     elif column_sum >= 300:
#         result = 'Lego Construction Set'
#     return result
# def is_true(current_row, current_col, row, col):
#     if current_row <= 6 and current_row >= 0 and current_col >= 0 and current_col <= 6:
#         row = current_row
#         col = current_col
#         return True, row, col
#     return False, row, col
# matrix = [input().split() for num in range(6)]
# row = 0
# col = 0
# column_sum = 0
# new_col = 'a'
# new_row = 'b'
# for i in range(3):
#     line = input()
#     current_row, current_col = list(map(int, line.replace('(', "").replace(')', "").split(', ')))
#     correct, row, col = is_true(current_row, current_col, row, col)
#     if correct:
#         if matrix[row][col] == "B":
#             if new_row != row or new_col != col:
#                 new_row = row
#                 new_col = col
#
#                 column_sum += sum(int(row[col]) for row in matrix if row[col] != 'B')
#             else:
#                 continue
# result = toys(column_sum)
# if result:
#     prize = result
#     print(f"Good job! You scored {column_sum} points, and you've won {prize}.")
# else:
#     print(f"Sorry! You need {100 - column_sum} points more to win a prize.")


def is_valid(row, col):
    if 0 <= row < 6 and 0 <= col < 6:
        return True

matrix = [[int(x) if x.isdigit() else x for x in input().split()] for x in range(6)]
points = 0

for _ in range(3):
    row, col = eval(input())

    if is_valid(row, col) and matrix[row][col] == 'B':
        matrix[row][col] = 0
        for r in range(6):
            points += matrix[r][col]

if points < 100:
    print(f"Sorry! You need {100 - points} points more to win a prize.")
else:
    if 100 <= points <= 199:
        prize = 'Football'
    elif points <= 299:
        prize = 'Teddy Bear'
    elif points >= 300:
        prize = 'Lego Construction Set'
    print(f"Good job! You scored {points} points, and you've won {prize}.")