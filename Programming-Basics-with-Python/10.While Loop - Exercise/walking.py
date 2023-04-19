steps_counter = 0
steps_condition = False

while True:
    current_steps = input()

    if current_steps == 'Going home':
        additional_steps = int(input())
        steps_counter += additional_steps

        if steps_counter >= 10000:
            steps_condition = True

        break

    steps_counter += int(current_steps)

    if steps_counter >= 10000:
        steps_condition = True
        break

diff = abs(steps_counter - 10000)

if steps_condition:
    print('Goal reached! Good job!')
    print(f'{diff} steps over the goal!')
else:
    print(f'{diff} more steps to reach goal.')