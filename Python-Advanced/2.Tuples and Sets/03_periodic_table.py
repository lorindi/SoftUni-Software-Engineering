n = int(input())
elements = set()
for _ in range(n):
    current_elements = set(input().split())
    elements = elements.union(current_elements)
# for element in elements:
#     print(element)
print(*elements, sep='\n')