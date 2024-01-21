# import datetime
#
#
# def increment(value):
#     increment_value = 1
#     return value + increment_value
#
#
# def get_years_from_today(year):
#     return datetime.date.today().year - year
#
#
# # today is 2023-07-12 -> get_years_from_today(2003-05-13) -> 20
# # today is 2024-07-12 -> get_years_from_today(2003-05-13) -> 21
#
# class Person:
#     def __init__(self, first_name, last_name, date_of_birth):
#         self.first_name = first_name
#         self.last_name = last_name
#         self.date_of_birth = date_of_birth
#
#     # not unit testable, but is integration testable
#     # unit testable, when isolated (i.e. `get_years_from_today` is mocked)
#     @property
#     def age(self):
#         return get_years_from_today(self.date_of_birth)
#
#     # unit testable
#     def __str__(self):
#         return f'{self.first_name} {self.last_name}'
#
#
# p = Person('Doncho', 'Minkov')


# dd = {'a': 1, 'b': 2}
#
# dd['a']  # O(1)
# 'a' in dd # O(1)
# 'a' in dd.keys() # O(N)
# 'a' in ['a', 'b'] # O(N)
