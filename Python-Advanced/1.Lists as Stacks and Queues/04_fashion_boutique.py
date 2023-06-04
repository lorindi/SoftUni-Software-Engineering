clothes = [int(x) for x in input().split()]
rack_capacty = int(input())

used_racks = 1
current_rack = rack_capacty

while clothes:
    current_piece = clothes[-1]
    if current_piece <= current_rack:
        clothes.pop()
        current_rack -= current_piece
    else:
        used_racks += 1
        current_rack = rack_capacty
print(used_racks)