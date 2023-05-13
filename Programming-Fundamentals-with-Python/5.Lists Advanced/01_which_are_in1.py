substrings = input().split(", ")
sentence = input()
result = [el for el in substrings if el in sentence]
print(result)