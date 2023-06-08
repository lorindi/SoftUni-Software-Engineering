# rows, cols = [int(x) for x in input().split()]
# word = input()
# index = 0
# for row in range(rows):
#     elements = [None] * cols
#     if row % 2 == 0:
#         for col in range(cols):
#             elements[col] = word[index % len(word)]
#             index += 1
#
#     else:
#         for col in range(cols -1, -1, -1):
#             elements[col] = word[index % len(word)]
#             index += 1
#     print(''.join(elements))

#2
rows, cols = [int(x) for x in input().split()]
word = input()
index = 0
for row in range(rows):
    elements = [None] * cols
    start, end, step = (0, cols, 1) if row % 2 == 0 else (cols -1, -1, -1)
    for col in range(start, end, step):
        elements[col] = word[index % len(word)]
        index += 1
    print(''.join(elements))