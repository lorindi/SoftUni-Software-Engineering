import math

number_of_people = int(input())
capacity = int(input())

number_of_elevator_courses = number_of_people / capacity
up = math.ceil(number_of_elevator_courses)
print(up)







