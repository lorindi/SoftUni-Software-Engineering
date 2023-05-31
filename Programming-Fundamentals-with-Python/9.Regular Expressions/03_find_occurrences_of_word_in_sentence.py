import re
string = input()
searched_word = input()
result = re.findall(fr"\b{searched_word}\b",string, flags=re.I)
print(len(result))