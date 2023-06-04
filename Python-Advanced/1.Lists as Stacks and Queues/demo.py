#1
# text = list(input())
# while text:
#     print(text.pop(), end='')
#2
# text = input()
# index = []
# for idx in range(len(text)):
#     if text[idx] == '(':
#         index.append(idx)
#     elif text[idx] == ')':
#         start = index.pop()
#         print(text[start: idx + 1])
#3
# from collections import deque
# names = input()
# deque_names = deque()
# while names != 'End':
#     if names == 'Paid':
#         while deque_names:
#             print(deque_names.popleft())
#     else:
#         deque_names.append(names)
#     names = input()
# print(f'{len(deque_names)} people remaining.')
#4
# from collections import deque
# quantity_water = int(input())
# name = input()
# names = deque()
# while not name == 'Start':
#     names.append(name)
#     name = input()
# commands = input()
# while commands != 'End':
#     if commands.isdigit():
#         person_name = names.popleft()
#         if int(commands) <= quantity_water:
#             print(f"{person_name} got water")
#             quantity_water -= int(commands)
#         else:
#             print(f"{person_name} must wait" )
#     else:
#         command, quantity = commands.split()
#         quantity_water += int(quantity)
#     commands = input()
# print(f'{quantity_water} liters left')
#5
# from collections import deque
# names = deque([el for el in input().split()])
# n = int(input())
# while len(names) > 1:
#     names.rotate(-n)
#     print(f'Removed {names.pop()}')
# print(f"Last in {''.join(names)}")
#Exercise: Lists as Stacks and Queues
#1
# from collections import deque
# numbers = deque(input())
# while numbers:
#     print(numbers.pop(), end = '')
#2
# n = int(input())
# stack = []
# for _ in range(n):
#     commands = input().split()
#     if commands[0] == '1':
#         stack.append(int(commands[1]))
#     elif commands[0] == '2' and stack:
#         stack.pop()
#     elif commands[0] == '3' and stack:
#         print(max(stack))
#     elif commands[0] == '4' and stack:
#         print(min(stack))
# while len(stack) > 1:
#     print(stack.pop(), end=', ')
# print(stack.pop())
#3
# from collections import deque
# quantity = int(input())
# sequence = deque(int(el) for el in input().split())
# print(max(sequence))
# order = sequence[0]
# while sequence:
#     if order > quantity:
#         break
#     else:
#         quantity -= sequence.popleft()
# if not sequence:
#     print("Orders complete")
# else:
#     print(f"Orders left: {' '.join([str(el) for el in sequence])}")
#4
# clothes = [int(el) for el in input().split()]
# racks = int(input())
# total_rack = 1
# current_rack = racks
# total_rack += 1
# while clothes:
#     if total_rack == 5:
#         break
#     if clothes[-1] <= current_rack:
#         current_rack -= clothes.pop()
#     else:
#         if clothes[-1] > current_rack:
#             current_rack = racks
#             total_rack += 1
# print(total_rack)
#5
# from collections import deque
# n = int(input())
# petrol_km_deque = deque()
# is_true = False
# for _ in range(n):
#     petrol_km_deque.append([int(num) for num in input().split()])
# for index in range(n):
#     for petrol, km in petrol_km_deque:
#         if petrol < km:
#             is_true = True
#             break
#         else:
#             is_true = False
#             break
#     if is_true:
#         petrol_km_deque.append(petrol_km_deque.popleft())
#     else:
#         print(index)
#         break
#6
# brackets = input()
# is_true = True
# parentheses = {
#     '(': ')',
#     '{': '}',
#     '[': ']'
# }
# list_bracket = []
# for bracket in brackets:
#     if bracket in '{[(':
#         list_bracket.append(bracket)
#     elif not list_bracket:
#         is_true = False
#     else:
#         current_bracket = list_bracket.pop()
#         if parentheses[current_bracket] != bracket: # if ')' != ')'
#             is_true = False
#             break
# if is_true:
#     print('YES')
# else:
#     print('NO')
# brackets = input()
# is_true = True
# list_bracket = []
# for bracket in brackets:
#     if bracket in '{[(':
#         list_bracket.append(bracket)
#     elif not list_bracket:
#         is_true = False
#     else:
#         current_bracket = list_bracket.pop()
#         if f'{current_bracket}{bracket}' not in '{}()[]':
#             is_true = False
#             break
# if is_true:
#     print('YES')
# else:
#     print('NO')
#7 Да я прегледам пак!
# from collections import deque
# def time_in_seconds(hour, minutes, seconds):
#     result = hour * 60 * 60 + minutes * 60 + seconds
#     return result
# def convert_time(data):
#     hour = data // 3600
#     minutes = (data % 3600) // 60
#     seconds = (data % 3600) % 60
#     return f"{hour:02d}:{minutes:02d}:{seconds:02d}"
# data = input().split(';')
# robot_current_time = {}
# robot_processing_time = {}
# for robots in data:
#     name_robots, time_robots = robots.split('-')
#     time_robots = int(time_robots)
#     robot_current_time[name_robots] = time_robots
#     robot_processing_time[name_robots] = -1
# hour, minutes, seconds = [int(el) for el in input().split(':')]
# time = time_in_seconds(hour, minutes, seconds)
# products = input()
# deque_products = deque()
# while products != 'End':
#     deque_products.append(products)
#     products = input()
# while deque_products:
#     time += 1
#     current_product = deque_products.popleft()
#     for name, current_time in robot_processing_time.items():
#         if current_time <= time:
#             robot_processing_time[name] = robot_current_time[name] + time
#             print(f"{name} - {current_product} [{convert_time(time)}]")
#             break
#     else:
#         deque_products.append(current_product)
#Lab: Tuples and Sets
#1
# numbers = input().split()
# dict_nums = {}
# for num in numbers:
#     if num not in dict_nums:
#         dict_nums[num] = 0
#     dict_nums[num] += 1
# for num in dict_nums.items():
#     print(f"{float(num[0])} - {num[1]} times")
#2 Да реша на ново!!!
# number_of_students = int(input())
# grades = {}
# for _ in range(number_of_students):
#     name, grade = input().split(' ')
#
#     if name not in grades:
#         grades[name] = []
#     grades[name].append(float(grade))
#
# for data in grades.items():
#     print(f"{data[0]} -> {' '.join([f'{el:.2f}' for el in data[1]])} (avg: {sum(data[1]) / len(data[1])})")
#2
# n = int(input())
# grade_dict = {}
# for _ in range(n):
#     name, grade = input().split()
#     if name not in grade_dict:
#         grade_dict[name] = []
#     grade_dict[name].append(float(grade))
# for data in grade_dict.items():
#     print(f"{data[0]} -> {' '.join([f'{el:.2f}' for el in data[1]])} (avg: {sum(data[1]) / len(data[1]):.2f})")
#3
# n = int(input())
# set_names = set()
# for _ in range(n):
#     set_names.add(input())
# print(*set_names, sep='\n')
#4
# n = int(input())
# set_n_c = set()
# for _ in range(n):
#     command, car_number = input().split(', ')
#     if command == 'IN':
#         set_n_c.add(car_number)
#     else:
#         if set_n_c and car_number in set_n_c:
#             set_n_c.remove(car_number)
# if not set_n_c:
#     print("Parking Lot is Empty")
# else:
#     print(*set_n_c, sep='\n')
#5
# n = int(input())
# set_guest = set()
# for _ in range(n):
#     set_guest.add(input())
# line = input()
# while not line == 'END':
#     if line in set_guest:
#         set_guest.remove(line)
#     line = input()
# print(len(set_guest))
# numbers = sorted(set_guest)
# print(*numbers, sep= '\n')
#Exercise: Tuples and Sets
#1
# n = int(input())
# usernames = set()
# for _ in range(n):
#     usernames.add(input())
# print(*usernames, sep='\n')
#2 Да я реша на ново и да науча методите!!!
# a = set([1, 2, 3, 4])
# b = set([3, 4, 5, 6])
# a | b  Union -> {1, 2, 3, 4, 5, 6} - обединяване на 2 сета
# a & b  Intersection -> {3, 4} - повтарящото се от двата сета
# a < b  Subset -> False
# a - b  Difference -> {1, 2} premahva ednakvoto
# a ^ b  Symmetric Difference -> {1, 2, 5, 6} - различното в двата сета, което не се повтаря
# n, m = [int(num) for num in input().split()]
# set_n = set()
# set_m = set()
# for i in range(n):
#     set_n.add(int(input()))
# for i in range(m):
#     set_m.add(int(input()))
# result = set_n.intersection(set_m)
# print(result)
#2 Пререшена
# n, m = [int(el) for el in input().split()]
# set_n = set()
# set_m = set()
# for _ in range(n):
#     set_n.add(input())
# for _ in range(m):
#     set_m.add(input())
# print(*set_n & set_m, sep='\n')
#3 Да обърна внимание на тази задача!
# n = int(input())
# set_chemical_compounds = []
# # set_chemical_compounds = set()
# for _ in range(n):
#     set_chemical_compounds.extend(input().split())
#     # set_chemical_compounds.add(input().split())
# set_c_c = set(set_chemical_compounds)
# print(*set_c_c, sep='\n')
# 3 (Обърнах внимание на 3та задача!)
# n = int(input())
# set_el = set()
# for _ in range(n):
#     el = set(input().split())
#     set_el.update(el)
# print(*set_el, sep='\n')
#4 Да я пререша
# words = input()
# letters = {}
# for el in words:
#     if el not in letters:
#         letters[el] = 0
#     letters[el] += 1
# result = [f"{key}: {value} time/s" for key, value in sorted(letters.items())]
# print(*result, sep='\n')
# Пререшена
# text = input()
# letters = {}
# # letters = set()
# for el in text:
#     if el not in letters:
#         letters[el] = 0
#     letters[el] += 1
# sorted_letters = sorted(letters.items(), key=lambda x: x[0])
# for data in sorted_letters:
#     print(f"{data[0]}: {data[1]} time/s")
#5
# def intersection(start, end):
#     return set(range(start, end + 1))
# current_result = set()
# n = int(input())
# for _ in range(n):
#     data = input().split('-')
#     start, end = [int(el) for el in data[0].split(',')]
#     s, e = [int(el) for el in data[1].split(',')]
#     set_i = intersection(start, end)
#     set_j = intersection(s, e)
#     result = set_i.intersection(set_j)
#     if len(result) >= len(current_result):
#         current_result = result
# print(f"Longest intersection is [{', '.join([str(x) for x in current_result])}] with length {len(current_result)}")
#6 Ako mi ostane vreme moje da q vidq pak
# n = int(input())
# result = set()
# even = set()
# odd = set()
# sum_even = 0
# sum_odd = 0
# for num in range(1, n + 1):
#     names = input()
#     current_sum = 0
#     for letter in names:
#         current_sum += ord(letter)
#     current_sum = current_sum // num
#     if current_sum % 2 == 0:
#         even.add(current_sum)
#         sum_even += current_sum
#     else:
#         odd.add(current_sum)
#         sum_odd += current_sum
# if sum_even == sum_odd:
#     print(*even.union(odd), sep=', ')
# elif sum_even < sum_odd:
#     print(*odd.difference(even), sep=', ')
# elif sum_even > sum_odd:
#     print(*even.symmetric_difference(odd), sep=', ')
#Exercise: Stacks, Queues, Tuples, and Sets
#1
# first = set(int(el) for el in input().split())
# second = set(int(el) for el in input().split())
#
# n = int(input())
#
# for _ in range(n):
#     data = input().split()
#     command = data[0]
#     subcommand = data[1]
#     if command == 'Add':
#         if subcommand == 'First':
#             [first.add(int(el)) for el in data[2:]]
#         else:
#             [second.add(int(el)) for el in data[2:]]
#     elif command == 'Remove':
#         if subcommand == 'First':
#             first = first.difference([int(el) for el in data[2:]])
#         else:
#             second = second.difference([int(el) for el in data[2:]])
#     else:
#         print(first.issubset(second) or second.issubset(first))
#
# print(*sorted(first), sep=', ')
# print(*sorted(second), sep=', ')
#2
# from collections import deque
# numbers_operators = input().split()
# numbers = deque()
# result = 0
# for num in numbers_operators:
#     if num in '+-*/':
#         while len(numbers) > 1:
#             el1 = numbers.popleft()
#             el2 = numbers.popleft()
#             if num == '+':
#                 result = el1 + el2
#                 numbers.appendleft(result)
#             elif num == '-':
#                 result = el1 - el2
#                 numbers.appendleft(result)
#             elif num == '*':
#                 result = el1 * el2
#                 numbers.appendleft(result)
#             elif num == '/':
#                 result = el1 // el2
#                 numbers.appendleft(result)
#     else:
#         numbers.append(int(num))
# print(result)
#3
# from collections import deque
# stack_chocolate = [int(el) for el in input().split(', ')]
# deque_cups_of_milk = deque([int(el) for el in input().split(', ')])
# milkshakes = 0
# while stack_chocolate and deque_cups_of_milk and milkshakes < 5:
#     chocolate = stack_chocolate.pop()
#     cups_of_milk = deque_cups_of_milk.popleft()
#     if chocolate <= 0 and cups_of_milk <= 0:
#         continue
#     elif chocolate <= 0:
#         deque_cups_of_milk.appendleft(cups_of_milk)
#     elif cups_of_milk <= 0:
#         stack_chocolate.append(chocolate)
#     elif chocolate != cups_of_milk:
#         deque_cups_of_milk.append(cups_of_milk)
#         stack_chocolate.append(chocolate - 5)
#     else:
#         if chocolate == cups_of_milk:
#             milkshakes += 1
# if milkshakes == 5:
#     print(f"Great! You made all the chocolate milkshakes needed!")
# else:
#     print("Not enough milkshakes.")
# if stack_chocolate:
#     print(f"Chocolate: {', '.join([str(el) for el in stack_chocolate])}")
# else:
#     print("Chocolate: empty")
# if deque_cups_of_milk:
#     print(f"Milk: {', '.join([str(el) for el in deque_cups_of_milk])}")
# else:
#     print("Milk: empty")
#4
# from collections import deque
# bees = deque([int(el) for el in input().split()])
# nectars = [int(el) for el in input().split()]
# symbols = deque(input().split())
# result = 0
# while bees and nectars and symbols:
#     bee = bees[0]
#     nectar = nectars.pop()
#
#     if bee > nectar:
#         continue
#
#     else:
#         bee = bees.popleft()
#         symbol = symbols.popleft()
#         if symbol == '+':
#             result += abs(bee + nectar)
#         elif symbol == '-':
#             result += abs(bee - nectar)
#         elif symbol == '*' and bee > 0 and nectar > 0:
#             result += abs(bee * nectar)
#         elif symbol == '/' and bee > 0 and nectar > 0:
#             result += abs(bee / nectar)
#
# print(f'Total honey made: {result}')
# if bees:
#     print(f"Bees left: {', '.join(str(el) for el in bees)}")
# if nectars:
#     print(f"Nectar left: {', '.join(str(el) for el in nectars)}")
#5
# from collections import deque
# number_of_materials = [int(el) for el in input().split()]
# magic_level = deque([int(el) for el in input().split()])
# is_true = False
# toys = {
#     150: 'Doll',
#     250: 'Wooden train',
#     300: 'Teddy bear',
#     400: 'Bicycle'
# }
# result_toys = {}
# while number_of_materials and magic_level:
#
#     material = number_of_materials[-1]
#     magic = magic_level[0]
#
#
#     if material == 0 and magic == 0:
#         number_of_materials.pop()
#         magic_level.popleft()
#     elif magic == 0:
#         magic_level.popleft()
#         continue
#     elif material == 0:
#         number_of_materials.pop()
#         continue
#
#     multiplication = material * magic
#
#     if multiplication in toys.keys():
#         number_of_materials.pop()
#         magic_level.popleft()
#         if toys[multiplication] not in result_toys:
#             result_toys[toys[multiplication]] = 1
#         else:
#             result_toys[toys[multiplication]] += 1
#
#     elif multiplication < 0:
#         number_of_materials.pop()
#         magic_level.popleft()
#         number_of_materials.append(magic + material)
#
#     elif multiplication > 0:
#         magic_level.popleft()
#         material = number_of_materials.pop()
#         number_of_materials.append(material + 15)
#
# if 'Doll' in result_toys.keys() and 'Wooden train' in result_toys.keys():
#     if result_toys.get('Doll') > 0 and result_toys.get('Wooden train') > 0:
#         is_true = True
# elif 'Teddy bear' in result_toys.keys() and 'Bicycle' in result_toys.keys():
#     if result_toys.get('Teddy bear') > 0 and result_toys.get('Bicycle') > 0:
#         is_true = True
# if is_true:
#     print("The presents are crafted! Merry Christmas!")
# else:
#     print("No presents this Christmas!")
# if number_of_materials:
#     print(f"Materials left: {', '.join((str(el) for el in number_of_materials[::-1]))}")
# if magic_level:
#     print(f"Magic left: {', '.join([str(el) for el in magic_level])}")
# for data in sorted(result_toys.items()):
#     print(f"{data[0]}: {data[1]}")
#Ytre da si dovursh tazi zadacha
# from collections import deque
# text = deque(input().split())
#
# result = []
# list_color = ['yellow', 'blue', 'red', 'orange', 'purple', 'green']
# dict_colors = {
#     "orange": ["red", "yellow"],
#     "purple": ["red", "blue"],
#     "green": ["yellow", "blue"]
# }
# while len(text) > 1:
#
#     start = text.popleft()
#     end = text.pop()
#     word = ''
#     half_text_index = len(text) // 2
#     if f"{start}{end}" in list_color:
#         color_name = f"{start}{end}"
#         result.append(color_name)
#     elif f"{end}{start}" in list_color:
#         color_name = f"{end}{start}"
#         result.append(color_name)
#     else:
#         if len(start) == 1:
#             for i in range(0, len(end) - 1):
#                 word += end[i]
#             text.insert(half_text_index, word)
#             text.insert(half_text_index, start)
#
#         else:
#             for i in range(0, len(start) - 1):
#                 result += end[i]
#             text.insert(half_text_index, end)
#             text.insert(half_text_index, word)
# for key, value in dict_colors.items():
#     if result[0], result[-1] == value[0], value[1]:
#         is_valid = True
# print(result)


#Lab: Multidimensional Lists
#1
# rows, cols = [int(num) for num in input().split(', ')]
# matrix = []
# sum_matrix = 0
# for row in range(rows):
#     line = [int(el) for el in input().split(', ')]
#     matrix.append(line)
#     sum_matrix += sum(line)
# print(sum_matrix)
# print(matrix)
#2
# rows = int(input())
# matrix = []
# for row in range(rows):
#     matrix.append([int(el) for el in input().split(', ') if int(el) % 2 == 0])
# print(matrix)
#3
# rows = int(input())
# matrix = []
# for row in range(rows):
#     matrix.extend(int(el) for el in input().split(', '))
# print(matrix)
#4
# rows, cols = [int(el) for el in input().split(', ')]
# matrix = []
# for row in range(rows):
#     matrix.append([int(el) for el in input().split()])
# for col in range(cols):
#     sum_cols = 0
#     for row in range(rows):
#         sum_cols += matrix[row][col]
#     print(sum_cols)
#5
# rows = int(input())
# matrix = []
# sum_numbers = 0
# for row in range(rows):
#     matrix.append([int(el) for el in input().split()])
# for row in range(rows):
#     for col in range(rows):
#         if matrix[row] == matrix[col]:
#             sum_numbers += matrix[row][col]
# print(sum_numbers)
#6
# rows = int(input())
# matrix = []
# result = ''
# is_true = False
# for row in range(rows):
#     matrix.append([el for el in input()])
# search_element = input()
# for i in range(rows):
#     for j in range(rows):
#         if matrix[i][j] == search_element:
#             result = i, j
#             is_true = True
#             break
# if is_true:
#     print(result)
# else:
#     print(f"{search_element} does not occur in the matrix")
#7
# rows, cols = [int(el) for el in input().split(', ')]
# matrix = []
# current_matrix = ''
# sum_matrix = 0
# for row in range(rows):
#     matrix.append([int(el) for el in input().split(', ')])
# for row in range(rows - 1):
#     for col in range(cols - 1):
#         result = matrix[row][col] + matrix[row][col + 1] + matrix[row + 1][col] + matrix[row + 1][col + 1]
#         if result > sum_matrix:
#             sum_matrix = result
#             current_matrix = matrix[row][col], matrix[row][col + 1], matrix[row + 1][col], matrix[row + 1][col + 1]
# print(f"{current_matrix[0]} {current_matrix[1]}\n{current_matrix[2]} {current_matrix[3]}")
# print(sum_matrix)


#Lab: Functions Advanced
#1
# def multiply(*args):
#     result = 1
#     for num in args:
#         result *= num
#     return result
# print(multiply(1, 4, 5))
# print(multiply(4, 5, 6, 1, 3))
# print(multiply(2, 0, 1000, 5000))
#2
# def get_info(**kwargs):
#     return f"This is {kwargs.get('name')} from {kwargs.get('town')} and he is {kwargs.get('age')} years old"
# print(get_info(**{"name": "George", "town": "Sofia", "age": 20}))
#3
# def sorting_cheeses(**kwargs):
#     sorted_len = sorted(kwargs.items(), key=lambda x: (-len(x[1]), x[0]))
#     result = ''
#     for key, value in sorted_len:
#         value = [int(el) for el in value]
#         name = key + '\n'
#         sorted_value = sorted(value, reverse= True)
#         str_sorted_value = name + '\n'.join([str(el) for el in sorted_value]) + '\n'
#         result += str_sorted_value
#     return result
# print(
#     sorting_cheeses(
#         Parmesan=[102, 120, 135],
#         Camembert=[100, 100, 105, 500, 430],
#         Mozzarella=[50, 125],
#     )
# )
# # print(
# #     sorting_cheeses(
# #         Parmigiano=[165, 215],
# #         Feta=[150, 515],
# #         Brie=[150, 125]
# #     )
# # )
#4 Да я реша на ново!
# Функцията isinstance()връща, True ако указаният обект е от посочения тип, в противен случай False.
# x = isinstance(5, int) #True
# def is_valid(args):
#     for num in args:
#         if not isinstance(num, int):
#             return False
#     return True
# def area(args):
#     return args[0] * args[1]
# def perimeter(args):
#     return 2 * args[0] + 2* args[1]
# def rectangle(*args):
#     if is_valid(args):
#         return f"Rectangle area: {area(args)}\nRectangle perimeter: {perimeter(args)}"
#     else:
#         return "Enter valid values!"
# print(rectangle(2, 10))
#5
# def recursive_power(number, power):
#     if power == 0:
#         return 1
#     return number * recursive_power(number, power - 1)
# print(recursive_power(2, 10))










