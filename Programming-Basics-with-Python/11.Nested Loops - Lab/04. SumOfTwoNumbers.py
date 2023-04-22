import sys
start_number = int(input())
end_number = int(input())
magic_number = int(input())
count = 0 #брой на комбинациите
#first -> [start_number до end_number]
#second -> [start_number до end_number]
is_found = False
#всички комбинации между двете числа
for first in range(start_number, end_number + 1):
  for second in range(start_number, end_number + 1):
    count += 1
    if first + second == magic_number:
      is_found = True
      print(f"Combination N:{count} ({first} + {second} = {magic_number})")
      sys.exit()

if not is_found:
  print(f"{count} combinations - neither equals {magic_number}")