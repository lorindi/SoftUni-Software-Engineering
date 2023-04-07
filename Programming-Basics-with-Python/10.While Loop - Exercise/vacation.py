needed_money = float(input())
available_money = float(input())
spend_counter = 0
day_counter = 0

while True:
    operation = input()
    current_sum = float(input())
    day_counter += 1

    if operation == 'spend':
        spend_counter += 1

        if available_money - current_sum < 0:
            available_money = 0
        else:
            available_money -= current_sum

        if spend_counter == 5:
            break

    elif operation == 'save':
        spend_counter = 0
        available_money += current_sum

        if available_money >= needed_money:
            break

if available_money >= needed_money:
    print(f'You saved the money for {day_counter} days.')
else:
    print("You can't save the money.")
    print(f'{day_counter}')