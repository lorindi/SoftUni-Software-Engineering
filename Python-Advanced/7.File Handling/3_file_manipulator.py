import os

while True:
    info = input().split("-")

    if info[0] == 'Create':
        file = open(f"files/{info[1]}", "w")
        file.close()

    elif info[0] == 'Add':
        with open(f"files/{info[1]}", "a") as file:
            file.write(f"{info[2]}\n")

    elif info[0] == 'Replace':
        try:
            with open(f"files/{info[1]}", "r+") as file:
                text = file.readlines()

            file = open(f"files/{info[1]}", "w")

            for i in range(len(text)):
                text[i] = text[i]. replace(info[2], info[3])

            file.write("".join(text))
            file.close()
        except FileNotFoundError:
            print("An error occurred")

    elif info[0] == 'Delete':
        try:
            os.remove(f"files/{info[1]}")
        except FileNotFoundError:
            print("An error occurred")
    else:
        break