first_eggs_count = int(input())
second_eggs_count = int(input())

# команда -> "one/two" или "End of battle"
# спираме: команда == "End of battle"
# продължаваме: команда != "End of battle"

command = input()
while command != "End of battle":
    # one / two
    if command == "one": # първия печели
        second_eggs_count -= 1
    elif command == "two": # втория печели
        first_eggs_count -= 1

    # проверка дали първия е без яйца
    if first_eggs_count <= 0:
        print(f"Player one is out of eggs. Player two has {second_eggs_count} eggs left.")
        break

    # проверка дали втория е без яйца
    if second_eggs_count <= 0:
        print(f"Player two is out of eggs. Player one has {first_eggs_count} eggs left.")
        break

    command = input()
else: #command == "End of battle"
    print(f"Player one has {first_eggs_count} eggs left.")
    print(f"Player two has {second_eggs_count} eggs left.")