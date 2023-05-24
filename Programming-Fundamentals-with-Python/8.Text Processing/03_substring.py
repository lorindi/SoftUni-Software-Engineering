search = input()
text = input()

while search in text:
    text = text.replace(search, "")

print(text)