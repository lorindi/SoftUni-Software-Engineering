number_of_open_tabs = int(input())
salary = int(input())
salary_condition = True

for _ in range(number_of_open_tabs):
    name_of_website = input()

    if name_of_website == 'Facebook':
        salary -= 150
    elif name_of_website == 'Instagram':
        salary -= 100
    elif name_of_website == 'Reddit':
        salary -= 50

    if salary <= 0:
        salary_condition = False
        break

if salary_condition:
    print(salary)
else:
    print('You have lost your salary.')
