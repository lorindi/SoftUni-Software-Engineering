university = {}

while True:
    line = input()
    if line == "end":
        break

    course, student = line.split(" : ")

    if course not in university:
        university[course] = []

    university[course].append(student)

for course, students in university.items():
    print(f"{course}: {len(students)}")
    for student in students:
        print(f"-- {student}")