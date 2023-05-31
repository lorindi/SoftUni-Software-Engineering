import re
text = input()
result = re.findall(r"\b_([a-zA-z0-9]+)\b", text)
print(','.join(result))