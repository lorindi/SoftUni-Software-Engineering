number_of_members_of_the_jury = int(input())
grade_counter = 0
sum_grades = 0

while True:
    problem_name = input()

    if problem_name == 'Finish':
        average_grade = sum_grades / grade_counter
        print(f"Student's final assessment is {average_grade:.2f}.")
        break
    current_grade_counter = 0

    for x in range(number_of_members_of_the_jury):
        grade = float(input())
        grade_counter += 1
        sum_grades += grade
        current_grade_counter += grade

    current_average_grade = current_grade_counter / number_of_members_of_the_jury
    print(f'{problem_name} - {current_average_grade:.2f}.')