n = int(input())
stack = []
for _ in range(n):
    data = input().split()
    command = data[0]
    if command == '1':
        number = int(data[1])
        stack.append(number)
    elif command == '2' and stack:
        stack.pop()
    elif command == '3' and stack:
        print(max(stack))
    elif command == '4' and stack:
        print(min(stack))
while stack:
    element = stack.pop()
    if stack:
        print(element, end = ', ')
    else:
        print(element)
