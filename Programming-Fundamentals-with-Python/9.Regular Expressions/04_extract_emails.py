import re
text = input()
pattern = r'((?<=\s)([a-z0-9]+[\-\_\.a-z0-9]*)\@([a-z]+)(-[a-z]+)*\.([a-z\.]+))\b'
result = re.findall(pattern, text)
for res in result:
    print(res[0])