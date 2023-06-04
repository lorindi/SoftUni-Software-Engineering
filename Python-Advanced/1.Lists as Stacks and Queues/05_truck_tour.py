from collections import deque
n = int(input())
pumps = deque()
for _ in range(n):
    pump_data = [int(x) for x in input().split()]
    pumps.append(pump_data)
for attempt in range(n):
    tank = 0
    failed = False
    for fuel, distance in pumps:
        tank += fuel
        if distance > tank:
            failed = True
            break
        else:
            tank -= distance
    if failed:
        pumps.append(pumps.popleft())
    else:
        print(attempt)

