# class Person:
#     def __init__(self, age):
#         self.age = age
#
#     def celebrate_birthday(self):
#         self.age += 1
#         return f"Person is now {self.age}"
#
# person = Person(27)
# print(person.age)
# print(person.celebrate_birthday())
# print(person.age)


# class Person:
#     def __init__(self, age):
#         self.age = age
#
#     def celebrate_birthday(self):
#         self.age += 1
#         return f"Person is now {self.age}"
#
# person = Person(27)
# print(person.__dict__)

# class Person:
#     def __init__(self, age):
#         self.age = age
#
#     def celebrate_birthday(self):
#         self.age += 1
#         return f"Person is now {self.age}"
#
#     def set_new_age(self, new_age):
#         self.age = new_age
#
# person = Person(27)
# print(person.age)
# person.set_new_age(2)
# print(person.age)


# class Person:
#     def __init__(self, age):
#         self.age = age
#
#     def celebrate_birthday(self):
#         self.age += 1
#         return f"Person is now {self.age}"
#
#     def set_new_age(self, new_age):
#         self.age = new_age
#
#     def __str__(self):
#         return f"I am person and I am {self.age} years old"
#
# person = Person(27)
# print(person)


# class Person:
#     def __init__(self, age):
#         self.age = age
#
#     def celebrate_birthday(self):
#         self.age += 1
#         return f"Person is now {self.age}"
#
#     def set_new_age(self, new_age):
#         self.age = new_age
#
#     def __repr__(self):
#         return f"I am person and I am {self.age} years old"
#
# person = Person(27)
# print(person)


# class Laptop:
#     brand = "Dell"
#
#     def __init__(self, name):
#         self.name = name
#
#
# first_laptop = Laptop("Latitude 5300")
# second_laptop = Laptop("Inspiron 15")
# print(first_laptop.brand == second_laptop.brand)
# print(first_laptop.name == second_laptop.name)


# class Dog:
#     kind = []
#     brands = []
#
#     def __init__(self, name):
#         self.name = name
#         self.brands = []
#
# oras = Dog("Oras")
# morty = Dog("Morty")
# oras.brands = ["1", "2"]
# morty.brands = ["n"]
# oras.brands.append("new")
# print(oras.brands)
# print(morty.brands)
# print(Dog.brands)

#2:00








