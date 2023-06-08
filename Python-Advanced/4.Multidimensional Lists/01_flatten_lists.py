sublists = input().split('|')
result = []
for index in range(len(sublists) -1, -1, -1):
    current_elements = sublists[index].strip().split()
    result.extend(current_elements)
print(' '.join(result))