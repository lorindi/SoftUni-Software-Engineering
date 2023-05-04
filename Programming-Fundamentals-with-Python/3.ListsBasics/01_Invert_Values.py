list_of_number = input().split()
oposite_numbers = []
for index in range(len(list_of_number)):
    oposite_number = -int(list_of_number[index])
    oposite_numbers.append(oposite_number)
print(oposite_numbers)

