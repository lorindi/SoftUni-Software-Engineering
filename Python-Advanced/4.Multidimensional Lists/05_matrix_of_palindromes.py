rows, cols = [int(x) for x in input().split()]

for row in range(rows):
    for col in range(cols):
        print(f"{chr(97 + row)}{chr(97 + row + col)}{chr(97 + row)}", end=' ')
    print()
