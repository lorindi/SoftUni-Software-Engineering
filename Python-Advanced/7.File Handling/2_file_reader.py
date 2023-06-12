# with open("numbers.txt") as file:
#     print(file.readlines())
#
# with open("numbers.txt") as file:
#     for line in file.readlines():
#         print(line)
#
# with open("numbers.txt") as file:
#     for line in file.readlines():
#         print(int(line))

# with open("numbers.txt") as file:
#     for line in file.readlines():
#         current_num = int(line)
#         print(type(current_num))

#различни решения на тази задача
try:
    with open("numbers.txt") as file:
        result = 0
        for line in file.readlines():
            current_num = int(line)
            result += current_num
        print(result)
except FileNotFoundError:
    print('File was not found')


try:
    with open("numbers.txt") as file:
        print(sum([int(line_num) for line_num in file.readlines()]))
except FileNotFoundError:
    print('File was not found')


try:
    with open("numbers.txt") as file: #1 2 3 4 5
        print(sum([int(line_num) for line_num in file.read().split()]))
except FileNotFoundError:
    print('File was not found')