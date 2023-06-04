n = int(input())
guests = set()
for _ in range(n):
    code = input()
    guests.add(code)
guests_code = input()
while not guests_code == 'END':
    guests.remove(guests_code)
    guests_code = input()
print(len(guests))
print('\n'.join(sorted(guests)))

