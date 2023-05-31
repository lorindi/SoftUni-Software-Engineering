import re

list_of_participants = input().split(', ')
command = input()
pattern_digits = r'\d+'
pattern_letters = r'[A-Za-z]+'
count_numbers = ''
add_names = ''
names_dict = {}
sum_numbers = 0
names_list = []
while command != 'end of race':
    matches_digits = re.findall(pattern_digits, command)
    matches_letters = re.findall(pattern_letters, command)
    for num in matches_digits:
        count_numbers += num
    for char in matches_letters:
        add_names += char
    if add_names in list_of_participants:
        for num in count_numbers:
            sum_numbers += int(num)
        if add_names not in names_dict.keys():
            names_dict[add_names] = sum_numbers
        else:
            names_dict[add_names] += sum_numbers
    count_numbers = ''
    add_names = ''
    sum_numbers = 0
    command = input()
for i in range(1,3+1):
    max_value = max(names_dict.values())
    max_key = max(names_dict, key=names_dict.get)
    names_list.append(max_key)
    names_dict.pop(max_key)

print(f"1st place: {names_list[0]}")
print(f"2nd place: {names_list[1]}")
print(f"3rd place: {names_list[2]}")



