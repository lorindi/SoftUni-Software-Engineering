text = input()
store = dict()

while text != "statistics":

    text = text.split(": ")
    product = text[0]
    quantity = int(text[1])

    if product in store.keys():
        store[product] += quantity
        # store[product] += quantity Ако продуктът съществува под едно и също име, ми го добави към продукта.
        # Така избягваме повторението на продукта и вместо да бъдат примерно: bread: 1 и bread: 4 по отделно, ще станат
        # едно цяло: bread: 5
    else:
        store[product] = quantity
        # Ако продуктът не се повтаря ми добави продукта и неговото количество.

    text = input()

count = len(store.keys())
total = sum(store.values())

print("Products in stock:")
for product in store:
    print(f"- {product}: {store[product]}")
print(f"Total Products: {count}")
print(f"Total Quantity: {total}")