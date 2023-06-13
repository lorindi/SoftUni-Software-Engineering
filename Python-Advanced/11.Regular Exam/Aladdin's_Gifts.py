from collections import deque

def cheking(product):

    result = ''
    if 100 <= product <= 199:
        result = 'Gemstone'
    elif 200 <= product <= 299:
        result = 'Porcelain Sculpture'
    elif 300 <= product <= 399:
        result = 'Gold'
    elif 400 <= product <= 499:
        result = 'Diamond Jewellery'

    if result:
        return result
    return False



collected_gifts = {}
materials_stack = [int(num) for num in input().split()]
magic_levels = deque([int(num) for num in input().split()])


while magic_levels and materials_stack:
    stack = materials_stack.pop()
    first_magic = magic_levels.popleft()

    present = stack + first_magic

    if present > 499:
        materials = stack // 2
        magic = first_magic // 2
        product = materials + magic
        if cheking(product):
            result = cheking(product)
            if result not in collected_gifts:
                collected_gifts[cheking(product)] = 1
            else:
                collected_gifts[cheking(product)] += 1



    elif present < 100:
        if present % 2 == 0:

            materials = stack * 2
            magic = first_magic * 3
            product = materials + magic
            if cheking(product):
                result = cheking(product)
                if result not in collected_gifts:
                    collected_gifts[cheking(product)] = 1
                else:
                    collected_gifts[cheking(product)] += 1



        elif present % 2 != 0:

            materials = stack * 2
            magic = first_magic * 2
            product = materials + magic
            if cheking(product):
                result = cheking(product)
                if result not in collected_gifts:
                    collected_gifts[cheking(product)] = 1
                else:
                    collected_gifts[cheking(product)] += 1


    else:
        if cheking(present):
            result = cheking(present)
            if result not in collected_gifts:
                collected_gifts[cheking(present)] = 1
            else:
                collected_gifts[cheking(present)] += 1




if 'Gemstone' in collected_gifts.keys() and 'Porcelain Sculpture' in collected_gifts.keys():
    if collected_gifts['Gemstone'] > 0 and collected_gifts['Porcelain Sculpture'] > 0:
        print("The wedding presents are made!")
elif 'Gold' in collected_gifts.keys() and 'Diamond Jewellery' in collected_gifts.keys():
    if collected_gifts['Gold'] > 0 and collected_gifts['Diamond Jewellery'] > 0:
        print("The wedding presents are made!")

else:
    print("Aladdin does not have enough wedding presents.")

if materials_stack:
    print(f"Materials left: {', '.join([str(num) for num in materials_stack])}")
if magic_levels:
    print(f"Magic left: {', '.join([str(num) for num in magic_levels])}")

for key, value in sorted(collected_gifts.items()):
    print(f'{key}: {value}')










