# команда -> сума за вноска (под формата на текст) или  "NoMoreMoney"

# повтаряме: четем сума + проверка < 0
# спираме: command == "NoMoreMoney"
# продължаваме: command != "NoMoreMoney"
command = input()
total_money = 0 # сума на сметката
while command != "NoMoreMoney":
    # command -> сума за вноска '5.51'
    sum_income = float(command)
    if sum_income < 0:
        print('Invalid operation!')
        break
    else:
        print(f"Increase: {sum_income:.2f}")
        total_money += sum_income
    command = input()

print(f"Total: {total_money:.2f}")