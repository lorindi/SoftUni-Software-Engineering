width = int(input())
length = int(input())
cake_size = width * length
number_of_pieces = 0

while True:
    current_number_of_pieces = input()

    if current_number_of_pieces == 'STOP':
        break

    number_of_pieces += int(current_number_of_pieces)

    if number_of_pieces > cake_size:
        break

diff = abs(number_of_pieces - cake_size)

if cake_size >= number_of_pieces:
    print(f'{diff} pieces are left.')
else:
    print(f'No more cake left! You need {diff} pieces more.')