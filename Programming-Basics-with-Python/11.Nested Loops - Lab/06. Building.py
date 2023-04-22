floors = int(input())
rooms = int(input())

# обходя всички етажи от последния към първия
for floor in range (floors, 0, -1):
    # обхождам всяка стая 0 до 4
    for room in range (0, rooms):
        if floor == floors: # последен
            print(f"L{floor}{room} ", end="")
        elif floor % 2 == 0: # четен
            print(f"O{floor}{room} ", end="")
        elif floor % 2 == 1: # нечетен
            print(f"A{floor}{room} ", end="")
    print()