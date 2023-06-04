from statistics import mean
n = int(input())
grades = {}

for _ in range(n):
    name, grade_as_str = input().split()
    grade = float(grade_as_str)
    if name not in grades:
        grades[name] = []
    grades[name].append(grade)
for data in grades.items():
    print(f"{data[0]} -> {' '.join([f'{el:.2f}'for el in data[1]])} "
          f"(avg: {(sum(data[1]) / len(data[1])):.2f})")