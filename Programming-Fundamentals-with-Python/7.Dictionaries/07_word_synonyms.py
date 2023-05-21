count = int(input())
dictionary = dict()

for i in range(count):
    word =input()
    synonym = input()

    if word not in dictionary:
        dictionary[word] = list()

    dictionary[word].append(synonym)

for word in dictionary:
    synonym = ", ".join(dictionary[word])
    print(f"{word} - {synonym}")