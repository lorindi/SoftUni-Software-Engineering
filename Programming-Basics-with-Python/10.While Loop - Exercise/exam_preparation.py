number_of_unsatisfactory_grades = int(input())
average_score = 0
poor_grades = 0
last_problem = ''
poor_grades_condition = False
number_of_problems = 0

while True:
    problem_name = input()
    if problem_name == 'Enough':
        break
    grade = int(input())

    average_score += grade
    number_of_problems += 1
    last_problem = problem_name

    if grade <= 4:
        poor_grades += 1

        if poor_grades == number_of_unsatisfactory_grades:
            poor_grades_condition = True
            break

if poor_grades_condition:
    print(f'You need a break, {poor_grades} poor grades.')
else:
    average_score /= number_of_problems
    print(f'Average score: {average_score:.2f}')
    print(f'Number of problems: {number_of_problems}')
    print(f'Last problem: {last_problem}')