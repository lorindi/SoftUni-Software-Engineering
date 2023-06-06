first = set(int(x) for x in input().split())
second = set(int(x) for x in input().split())

n = int(input())

for _ in range(n):
    line_args = input().split()
    command = line_args[0]
    command_param = line_args[1]
    if command == 'Add':
        if command_param == 'First':
            [first.add(int(x)) for x in line_args[2:]]
        else:
            [second.add(int(x)) for x in line_args[2:]]
    elif command == 'Remove':
        if command_param == 'First':
            first = first.difference([int(x) for x in line_args[2:]])
        else:
            second = second.difference([int(x) for x in line_args[2:]])
    else:
        print(first.issubset(second) or second.issubset(first))
print(*sorted(first), sep = ', ')
print(*sorted(second), sep = ', ')
# print(f"{', '.join([str(x) for x in sorted(first)])}\n{', '.join([str(x) for x in sorted(first)])}")