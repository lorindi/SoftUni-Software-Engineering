import re
pattern = "\d+"
text = input()
while True:
    if text:
        match = re.findall(pattern, text)
        if match:
            print(' '.join(match),end=" ")
    else:
        break