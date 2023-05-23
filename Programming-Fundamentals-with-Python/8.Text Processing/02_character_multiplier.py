# strings = input().split()
# first_string = strings[0]
# second_string = strings[1]
# difference = abs(len(first_string)) - len(second_string)
# total_sum = 0
# if len(first_string) > len(second_string):
#     for index in range(0, len(second_string)):
#         total_sum += ord(first_string[index]) * ord(second_string[index])
#     for index in range(len(first_string) - difference, len(first_string)):
#         total_sum += ord(first_string[index])
# elif len(second_string) > len(first_string):
#     for index in range(0,len(first_string)):
#         total_sum += ord(first_string[index]) * ord(second_string[index])
#     for index in range(len(second_string) - difference, len(second_string)):
#         total_sum += ord(second_string[index])
# else:
#     for index in range(0, len(first_string)):
#         total_sum += ord(first_string[index]) * ord(second_string[index])
#
# print(total_sum)

two_strings = input().split()
longest = max(two_strings, key=len)
two_strings.remove(longest)
shortest = two_strings[0]
sum_of_chars = 0
for i in range(len(longest)):
    if i < len(shortest):
        sum_of_chars += ord(longest[i]) * ord(shortest[i])
    else:
        sum_of_chars += ord(longest[i])
print(sum_of_chars)

