n = int(input())
word = input()

strings = []
for i in range(n):
    current_string = input()
    strings.append(current_string)
print(strings)

for i in range(len(strings) - 1, -1, -1):
    if word not in strings[i]:
        strings.remove(strings[i])
print(strings)
