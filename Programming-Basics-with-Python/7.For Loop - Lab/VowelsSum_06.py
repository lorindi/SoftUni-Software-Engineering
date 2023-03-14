text = input()
sum = 0 # сумата от гласните букви
# обхождам всеки символ
# повтарям: проверка дали символа: a (+1); e(+2); i(+3); o(+4); u(+5)
for letter in text:
    if letter == 'a':
        sum += 1
    elif letter == 'e':
        sum += 2
    elif letter == 'i':
        sum += 3
    elif letter == 'o':
        sum += 4
    elif letter == 'u':
        sum += 5

print(sum)
