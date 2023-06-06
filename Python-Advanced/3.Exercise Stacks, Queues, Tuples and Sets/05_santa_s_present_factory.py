from collections import deque

boxes = [int(x) for x in input().split()]
magic_levels = deque([int(x) for x in input().split()])
presents = {
    150: 'Doll',
    250: 'Wooden train',
    300: 'Teddy bear',
    400: 'Bicycle'
}
crafted_presents = {}
while boxes and magic_levels:
    box = boxes.pop()
    magic_level = magic_levels.popleft()

    result = box * magic_level

    if result in presents:
        toy = presents[result]
        if toy in crafted_presents:
            crafted_presents[toy] += 1
        else:
            crafted_presents[toy] = 1
    elif result < 0:
        boxes.append(box + magic_level)
    elif result > 0:
        boxes.append(box + 15)
    else:
        if box == 0 and magic_level ==0:
            continue
        if box == 0:
            magic_levels.appendleft(magic_level)
        else:
            boxes.append(box)
if ('Doll' in crafted_presents and 'Wooden train' in crafted_presents) or \
        ('Teddy bear' in crafted_presents and 'Bicycle' in crafted_presents):
    print("The presents are crafted! Merry Christmas!")
else:
    print("No presents this Christmas!")
if boxes:
    print(f"Materials left: {', '.join([str(x) for x in reversed(boxes)])}")
if magic_levels:
    print(f"Magic left: {', '.join([str(x) for x in magic_levels])}")
for present, count in sorted(crafted_presents.items()):
    print(f"{present}: {count}")