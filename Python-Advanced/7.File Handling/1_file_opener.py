# try:
#     file = open("text.txt")
#     print("File found")
# except FileNotFoundError:
#     print("File not found")


import os.path
if os.path.exists("text.txt"):
    print("File found")
else:
    print("File not found")

