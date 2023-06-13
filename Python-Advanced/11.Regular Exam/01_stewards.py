from collections import deque

seats = input().split(', ')

first = deque([int(el) for el in input().split(', ')])
second = deque([int(el) for el in input().split(', ')])

coincidence = [] #3
rotations = 0 #10

while len(coincidence) < 3 and rotations < 10 and first and second:
    rotations += 1

    f = first.popleft()
    s = second.pop()


    char = chr(f + s)
    el_f = f'{f}{char}'

    if el_f in seats:
        coincidence.append(el_f)
        seats.remove(el_f)

    el_s = f'{s}{char}'
    if el_s in seats:
        coincidence.append(el_s)
        seats.remove(el_s)

    else:
        if el_f not in seats and el_s not in seats:
            first.append(f)
            second.appendleft(s)

print(f'Seat matches: {", ".join(coincidence)}')
print(f'Rotations count: {rotations}')