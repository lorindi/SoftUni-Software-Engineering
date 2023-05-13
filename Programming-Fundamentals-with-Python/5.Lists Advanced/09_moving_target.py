def shoot_target(targets, current_index, current_value):
    targets[current_index] -= current_value
    if targets[current_index] <= 0:
        targets.pop(current_index)

    return targets

def add_target(targets, current_index, current_value):
    targets.insert(current_index,current_value)

    return targets

def strike_target(targets, current_index, current_value):
    targets = targets[0: current_index - current_value] + targets[current_index + current_value + 1::]

    return targets

sequence_of_targets = [int(number) for number in input().split()]
command = input().split()

while command[0] != "End":
    action = command[0]
    index = int(command[1])
    value = int(command[2])
    if action == "Shoot":
        if 0 <= index < len(sequence_of_targets):
            sequence_of_targets = shoot_target(sequence_of_targets, index, value)
    elif action == "Add":
        if 0 <= index < len(sequence_of_targets):
            sequence_of_targets = add_target(sequence_of_targets, index, value)
        else:
            print("Invalid placement!")
    elif action == "Strike":
        if 0 <=  index - value < len(sequence_of_targets) and 0 <=  index + value < len(sequence_of_targets):
            sequence_of_targets = strike_target(sequence_of_targets, index, value)
        else:
            print("Strike missed!")
    command = input().split()
print('|'.join(str(target) for target in sequence_of_targets))