number = int(input())

for i in range(number):
    for j in range(0, i +1):
        print("*", end="")
    print()
for i in range(number -1):
    for j in range(number -1, i,-1):
        print("*", end="")
    print()