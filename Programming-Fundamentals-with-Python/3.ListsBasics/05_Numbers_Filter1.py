number = int(input())

positiv = list()
negativ = list()
odd = list()
even = list()

for i in range(number):
    current = int(input())
    if current % 2 == 0:
        even.append(current)
    else:
        odd.append(current)
    if current >= 0:
        positiv.append(current)
    else:
        negativ.append(current)

filter_word = input()

# if filter_word == "even":
#     print(even)
# if filter_word == "odd":
#     print(odd)
# if filter_word == "positive":
#     print(positiv)
# if filter_word == "negativ":
#     print(negativ)

print(eval(filter_word))