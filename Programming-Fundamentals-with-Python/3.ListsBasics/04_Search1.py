n = int(input())
search_word = input()
strings = list()

for i in range(n):
    strings.append(input())

print(strings)

filtered = list()

for current_string in strings:
    if search_word in current_string:
        filtered.append(current_string)

print(filtered)