text = input()
courses = dict()

while ":" in text:

    data = text.split(":")
    name = data[0]
    id = data[1]
    course = data[2]

    if course not in courses.keys():
        courses[course] = dict()
        # Създавам нов речник ако не съществува този курс все още.
        # Ако този курс съществува този if няма да се изпълни,
        # но ако не съществува е създаден празен в този момент.

    courses[course][id] = name
    # Да добавя студента към този курс. В този курс на това ид ще бъде този
    # студент, като ако този курс съществува се добавя още един студент.


    text = input()

text = text.replace("_", " ")

for id in courses[text]:
    print(f"{courses[text][id]} - {id}")