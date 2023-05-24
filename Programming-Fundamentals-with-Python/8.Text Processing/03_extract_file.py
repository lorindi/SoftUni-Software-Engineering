path = input().split('\\')
filename, extension = path[-1].split('.')
print(f"File name: {filename}")
print(f"File extension: {extension}")