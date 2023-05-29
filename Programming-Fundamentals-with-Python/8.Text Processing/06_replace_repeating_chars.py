text = input()
final = list()
for i in range(len(text)):
    if final:
        if text[i] != final[-1]:
            final.append(text[i])
    else:
        final.append(text[i])
print("".join(final))

#2
string = input()
letters = []
for char in range(len(string)):
    if char == 0:
        letters.append(string[char])
    elif string[char] != string[char - 1]:
        letters.append(string[char])
print(''.join(letters))