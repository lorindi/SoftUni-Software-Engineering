from collections import deque
kids = deque(input().split())
n = int(input())
while len(kids) > 1:
    kids.rotate(-n)
    print(f"Removed {kids.pop()}")
print(f"Last is {kids.popleft()}")