text = input()

while text != "end":
    rev = reversed(text)
    reversed_text = "".join(rev)
    print(f"{text} = {reversed_text}")
    text = input()