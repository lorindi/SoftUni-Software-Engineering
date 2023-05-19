def print_func(legendary_items_dict, junk_items_dict, special_item):
    print(f'{special_item} obtained!')
    print(f"shards: {legendary_items_dict['shards']}")
    print(f"fragments: {legendary_items_dict['fragments']}")
    print(f"motes: {legendary_items_dict['motes']}")

    for key, value in junk_items_dict.items():
        print(f'{key}: {value}')

def legendary_farming():
    legendary_items_dict = {'shards': 0, 'fragments': 0,'motes': 0}
    junk_items_dict = {}
    while_condition = False

    while True:
        items = input().lower()
        items = items.split(' ')

        for value, material in zip(items[0::2], items[1::2]):
            material = material.lower()
            value = int(value)

            if material in ['shards', 'fragments', 'motes']:
                if material not in legendary_items_dict:
                    legendary_items_dict[material] = value
                else:
                    legendary_items_dict[material] += value

                if legendary_items_dict[material] >= 250:
                    legendary_items_dict[material] -= 250
                    special_item = ''
                    if material == 'shards':
                        special_item = 'Shadowmourne'
                    elif material == 'fragments':
                        special_item = 'Valanyr'
                    elif material == 'motes':
                        special_item = 'Dragonwrath'

                    print_func(legendary_items_dict, junk_items_dict, special_item)
                    while_condition = True

            else:
                if material not in junk_items_dict:
                    junk_items_dict[material] = value
                else:
                    junk_items_dict[material] += value

            if while_condition:
                break
        if while_condition:
            break

legendary_farming()
