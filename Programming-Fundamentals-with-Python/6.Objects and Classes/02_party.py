class Person:
    def __init__(self):
        self.people = []

person = Person()

line = input()

while line != 'End':
    person.people.append(line)
    line = input()
print(f"Going: {', '.join(person.people)}")
print(f"Total: {len(person.people)}")

# Важното е за тази задача да запомня, че може да затворил клас в една променлива.
# Може да добавим към лист каквото имаме,след това от дясно на ляво,към листа който сме добавили съответното име,трябва също и класът,явно защото
# листа е във функция а функцията е в клас и вероятно трябва да има съответна връзка.