# file = open('example.txt')
# print(file)
#
# file = open('example.txt')
# print(file.name)
#
# file = open('example.txt')
# print(file.readlines())

# file = open('../inner.txt')
# print(file.readlines()) #път качване на една директория ../

# import os
# absolute_path = os.path.abspath(__file__)
# file_path = absolute_path + '/costom_files/' + 'inner.txt'
# print(absolute_path + '/costom_files/' + 'inner.txt')
# file = open(file_pat)
# print() #разминаване на черти, в windows са обърнати на другата страна

# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'custom_files', 'inner.txt')
# print(file_path)
# file_path = open(file_path)
# print(file.readlines()) #['from custom directory']

# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'inner.txt')
# file = open(file_path, 'w') #w - създава и отваря фаела
# print(file.writelines("somth"))
#
#
# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'inner.txt')
# file = open(file_path, "a") #а = append
# print(file.writelines("second try"))

# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'inner.txt')
# file = open(file_path, "a") #а = append
# print(file.writelines("\nthird try")) #добавяне на нов ред


# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'inner.txt')
# print(file_path)
# example_dict = {'a': 1, 'b': 2}
# file = open(file_path, "a") #а = append
# print(file.writelines(example_dict)) #добавяне на key


# import os
# absolute_path = os.path.dirname(os.path.abspath(__file__))
# file_path = os.path.join(absolute_path, 'inner.txt')
# print(file_path)
# example_dict = {'a': 1, 'b': 2}
# file = open(file_path, "r") #а = append
# print(file.readlines()) #добавяне на key
# text = input()
# print(type(text))

# file = open("example.txt")
# print(file.read())

# file = open("example.txt")
# content = file.read()
# print(type(file.read()))
#
# file = open("example.txt")
# content = file.readline()
# print(content)

# file = open("example.txt")
# for line in file.readlines():
#     print(line)

# file = open("example.txt")
# # print(file.read(3))
# print(file.readline(5))
# # print(file.read(3))
# # print(file.read(3))
# # print(file.read(3))

# file = open("example.txt")
# print(file.read())
# file.close()

# with open("example.txt") as file:
#     print(file.read())
# print(file.read())


# with open("numbers.txt") as file:
#     for line in file:
#         print(line)

import os
os.remove("python.txt")