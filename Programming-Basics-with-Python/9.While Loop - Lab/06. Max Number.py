# команда -> число под формата на текст или "Stop"
# повтарям: чета число + проверка дали е макс
# спирам: команда == "Stop"
# продължавам: команда != "Stop"
import sys
command = input()
max = -sys.maxsize
while command != "Stop":
    # command -> число под формата на текст
    number = int(command)
    # проверка за максимум
    if number > max:
        max = number

    command = input()
else: # command == "Stop"
    print(max)


