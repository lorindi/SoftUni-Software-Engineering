first_word = input()
second_word = input()

for i in range(len(first_word)):
    if first_word[i] != second_word[i]:
        replacement = second_word[i]
        word = first_word[0:i] + replacement + first_word[i+1:]
        first_word = word
        print(first_word)


