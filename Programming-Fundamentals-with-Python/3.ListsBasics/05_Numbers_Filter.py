number = int(input())

number_list = list()

for i in range(number):
    current = int(input())
    number_list.append(current)

filter_word = input()
filtered = list()

for current_number in number_list:

    if filter_word == "even":
        if current_number % 2 == 0:
            filtered.append(current_number)
    if filter_word == "odd":
        if current_number % 2 != 0:
            filtered.append(current_number)
    if filter_word == "positive":
        if current_number >= 0:
            filtered.append(current_number)
    if filter_word == "negative":
        if current_number < 0:
            filtered.append(current_number)
print(filtered)

