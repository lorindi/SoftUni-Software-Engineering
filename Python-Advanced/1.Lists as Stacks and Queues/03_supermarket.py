from collections import deque
name = input()
deque_name = deque()
while not name == 'End':
    if name == 'Paid':
        while deque_name:
            print(deque_name.popleft())

    else:
        deque_name.append(name)
    name = input()
print(f"{len(deque_name)} people remaining.")

