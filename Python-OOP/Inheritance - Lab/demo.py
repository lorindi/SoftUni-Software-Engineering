# 1
# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         self.age = age
#
# class Employee:
#     def __init__(self, name, age, work_id, slaray):
#         self.name = name
#         self.age = age
#         self.work_id = work_id
#         self.slaray = slaray
#
# class Manager:
#     def __init__(self, name, age, work_id, slaray, commision):
#         self.name = name
#         self.age = age
#         self.work_id = work_id
#         self.slaray = slaray
#         self.commision = commision
# 1.2
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

class Employee(Person):
    def __init__(self, name, age, work_id, slaray):
        super().__init__(name, age)
        self.work_id = work_id
        self.slaray = slaray

class Manager(Employee):
    def __init__(self, name, age, work_id, slaray, commision):
        super().__init__(name, age, work_id, slaray)
        self.commision = commision