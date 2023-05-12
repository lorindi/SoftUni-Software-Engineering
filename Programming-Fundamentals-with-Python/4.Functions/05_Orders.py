def calc_price(product,quantity):
    if product == 'coffee':
        return quantity * 1.50
    elif product == 'coke':
        return quantity * 1.40
    elif product == 'water':
        return quantity * 1.00
    elif product == 'snaks':
        return quantity * 2.00
current_prodict = input()
current_quantity = int(input())

final_price = (calc_price(current_prodict, current_quantity))
print(f'{final_price:.2f}')