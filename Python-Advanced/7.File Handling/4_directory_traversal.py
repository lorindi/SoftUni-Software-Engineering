import os

directory = input()
result = []
extensions = {}

for filename in os.listdir(directory):
    file = os.path.join(directory, filename)

    if os.path.isfile(file):
        extension = filename.split('.')[-1]

        if extension not in extensions:
            extensions[extension] = []
        extensions[extension].append(filename)

extensions = sorted(extensions.items(), key=lambda x: x[0])

for extension, files in extensions:
    result.append(f".{extension}\n")

    for file in sorted(files):
        result.append(f'- - - {file}\n')

with open("files/report.txt", "w") as file:
    file.write("".join(result))