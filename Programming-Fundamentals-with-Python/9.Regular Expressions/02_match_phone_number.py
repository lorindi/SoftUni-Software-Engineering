# import re
# text = input()
#
# matches = re.findall(r"\+359 2 \d{3} \d{4}\b|\+359-2-\d{3}-\d{4}\b", text)
#
# print(", ".join(matches))
import re
text = input()

matches = re.finditer(r"\+359([ -])2\1\d{3}\1\d{4}\b", text)

output = list()
for match in matches:
    output.append(match.group())
print(", ".join(output))
