import re

pattern = r'((www)\.([A-Za-z0-9]+(\-[A-Za-z0-9]+)*(\.[a-z]+)+))'
text = input()
list_links = []
while text:
    matches = re.finditer(pattern, text)
    for match in matches:
        list_links.append(match.group(1))
    text = input()
for is_valid in list_links:
    print(is_valid)