# my_dict = {}
# word = input()
#
# for ch in word:
#     if ch not in my_dict and ch != ' ':
#         my_dict[ch] = 1
#     else:
#         my_dict[ch] += 1
#
# print(my_dict)

from collections import Counter

word = input()
result = Counter(word)

for key, value in result.items():
    if key != ' ':
        print(f'{key} -> {value}')
