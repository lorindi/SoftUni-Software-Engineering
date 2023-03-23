start_number = int(input())
# повтаряме: четем число + сумираме
# спираме: сума >= start_number
# продължаваме: сума < start_number
sum = 0
while sum < start_number:
    number = int(input())
    sum += number
else: # sum >= start_number
    print(sum)