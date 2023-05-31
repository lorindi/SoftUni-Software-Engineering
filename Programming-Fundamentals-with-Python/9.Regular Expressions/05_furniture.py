import re
total_price = 0
commands = input()
pattern = r"^>>([A-Za-z]+)<<(\d+\.?\d+)!(\d+)$"
list_furniture_name = []
while commands != 'Purchase':
    match = re.search(pattern, commands)
    if match:
        furniture_name, price, quantity = match.groups()
        total_price += float(price) * int(quantity)
        list_furniture_name.append(furniture_name)

    commands = input()
print('Bought furniture:')
for string in list_furniture_name:
    print(''.join(string))
print(f'Total money spend: {total_price:.2f}')
