import re

text = input()
dict = {}
total_income = 0
pattern = r'\%(?P<name>[A-Z][a-z]+)\%[^\|\$\%\.]*?\<(?P<product>\w+)\>[^\|\$\%\.]*?\|(?P<count>[0-9]+)\|[\w\-]*?(?P<price>[0-9.]+[0-9])(?=\$)'
while text != 'end of shift':
    matches = re.finditer(pattern, text)
    for i in matches:
        name = i.group('name')
        product = i.group('product')
        count = i.group('count')
        price = i.group('price')
        if name not in dict.keys():
            dict[name] = {}
        dict[name][product] = float(count) * float(price)
        total_income += float(count) * float(price)
        for i in range(1):
            result = float(count) * float(price)
            print(f'{name}: {product} - {result:.2f}')
    text = input()
print(f"Total income: {total_income:.2f}")