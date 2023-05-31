import re
text = input()

matchest = re.findall(r"\b[A-Z][a-z]+ [A-Z][a-z]+\b", text)

print(" ".join(matchest))

