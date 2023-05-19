words = input().split(' ')
words = list(map(lambda w: w.lower(), words))
occurrences = dict()

for word in words:
    if word not in occurrences:
        occurrences[word] = 1
    else:
        occurrences[word] += 1

odd_words = list()

for word in occurrences.keys():
    if occurrences[word] % 2 != 0:
        odd_words.append(word)
print(" ".join(odd_words))