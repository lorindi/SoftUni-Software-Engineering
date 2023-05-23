# words = input().split()
# output = ""
#
# for word in words:
#     output += word * len(word)
#
# print(output)

string = input()
integer = int(input())
repeat_string = lambda a,b: a * b
result = repeat_string(string, integer)
print(result)