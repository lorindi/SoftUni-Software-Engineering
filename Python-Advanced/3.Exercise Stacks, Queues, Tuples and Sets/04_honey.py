from collections import deque

bees = deque([int(x) for x in input().split()])
nectars = [int(x) for x in input().split()]
operators = deque(input().split())

honey = 0

while bees and nectars:
    bee = bees[0]
    nectar = nectars.pop()

    if bee > nectar:
        continue

    bees.popleft()
    operator = operators.popleft()
    if operator == '+':
        honey += abs(bee + nectar)
    elif operator == '-':
        honey += abs(bee - nectar)
    elif operator == '*':
        honey += abs(bee * nectar)
    elif operator == '/' and nectar > 0:
        honey += abs(bee / nectar)
print(f"Total honey made: {honey}")
if bees:
    print(f"Bees left: {', '.join([str(x) for x in bees])}")
if nectars:
    print(f"Nectar left: {', '.join([str(x) for x in nectars])}")

