width = int(input())
length = int(input())
height = int(input())

count_free_space = width * length * height

command = input()

while command != "Done":

    boxes = int(command)
    count_free_space -= boxes
    if count_free_space <= 0:
        print(f'No more free space! You need {abs(count_free_space)} Cubic meters more.')
        break
    command = input()
else:
    print(f'{count_free_space} Cubic meters left.')