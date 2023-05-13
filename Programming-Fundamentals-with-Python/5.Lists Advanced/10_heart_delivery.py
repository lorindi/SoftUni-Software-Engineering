neighborhood = list(map(int, input().split('@')))
length_neighborhood = len(neighborhood)
house = 0
while True:
    command = input()
    if command == 'Love!':
        break
    cupidon = command.split()
    jump_length = int(cupidon[1])
    house += jump_length
    if house >= length_neighborhood:
        house = 0
    if neighborhood[house] == 0:
        print(f"Place {house} already had Valentine's day.")
    else:
        neighborhood[house] -= 2
        if neighborhood[house] == 0:
            print(f"Place {house} has Valentine's day.")

print(f"Cupid's last position was {house}.")
count = 0
for house in range(len(neighborhood)):
    if neighborhood[house] > 0:
        count += 1

if count == 0:
    print("Mission was successful.")
else:
    print(f"Cupid has failed {count} places.")
