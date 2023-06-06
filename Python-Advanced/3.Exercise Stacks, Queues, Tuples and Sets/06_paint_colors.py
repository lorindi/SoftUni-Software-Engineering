from collections import deque
main_colors = {'red', 'yellow', 'blue'}
secondary_colors = {'orange', 'purple', 'green'}
substrings = deque(input().split())
collected_colors = []
while substrings:
    first_substr = substrings.popleft()
    second_substr = substrings.pop() if substrings else ''
    result = first_substr + second_substr
    if result in main_colors or result in secondary_colors:
        collected_colors.append(result)
        continue
    result = second_substr + first_substr
    if result in main_colors or result in secondary_colors:
        collected_colors.append(result)
        continue
    first_substr = first_substr[:-1]
    second_substr = second_substr[:-1]
    if first_substr:
        substrings.insert(len(substrings) // 2, first_substr)
    if second_substr:
        substrings.insert(len(substrings) // 2, second_substr)
result = []
required_colors = {
    'orange': ['red', 'yellow'],
    'purple': ['red', 'blue'],
    'green': ['yellow', 'blue'],
}
for color in collected_colors:
    if color in main_colors:
        result.append(color)
    else:
        is_valid = True
        for required_color in required_colors[color]:
            if required_color not in collected_colors:
                is_valid = False
                break
        if is_valid:
            result.append(color)
print(result)
        