# class CreditCard:
#     def __init__(self, number, exp_date, cvv, name, pin):
#         self.number = number
#         self.exp_date = exp_date
#         self.cvv = cvv
#         self.name = name
#         self.__pin = pin #са видими единствено в рамките на класа __
#
#     def change_pin(self, old_pin, new_pin):
#         if old_pin == self.__pin:
#             self.__pin = new_pin
#             return
#         raise ValueError('Old pin is not correct')
#
# card = CreditCard(123456789012345, '2022-10', 256, 'Test Name', 7887)
# # card._CreditCard__pin = 1
# # print(card._CreditCard__pin)
# card.change_pin(7887, 1234)
# a = 5


# class CreditCard:
#     def __init__(self, number, exp_date, cvv, name, pin):
#         self.number = number
#         self.exp_date = exp_date
#         self._cvv = cvv # може да бъде наследено от наследниците _ и за видими извън рамките на класа и от класа
#         self.name = name
#         self.__pin = pin
#
#     def change_pin(self, old_pin, new_pin):
#         if old_pin == self.__pin:
#             self.__pin = new_pin
#             return
#         raise ValueError('Old pin is not correct')
#
# class ChildCredit(CreditCard):
#     def __init__(self, number, exp_date, cvv, name, pin, child_name):
#         super().__init__(number, exp_date, cvv, name, pin)
#         self.child_name = child_name
#
# card = CreditCard(123456789012345, '2022-10', 256, 'Test Name', 7887)
# card.change_pin(7887, 1234)
# print(card._cvv)


# class Product:
#     def __init__(self, name, price):
#         self.__price = price
#         self.__name = name
#
# ob = Product('S', 10)
# ob.price = 100
# print(ob.price)


# class CreditCard:
#     def __init__(self, number, exp_date, cvv, name, pin):
#         self.number = number
#         self.exp_date = exp_date
#         self._cvv = cvv # може да бъде наследено от наследниците _ и за видими извън рамките на класа и от класа
#         self.name = name
#         self.__pin = pin
#
#     def __is_pin_correct(self, pin):
#         return self.__pin == pin
#
#     def change_pin(self, old_pin, new_pin):
#         if self.__is_pin_correct(old_pin):
#             self.__pin = new_pin
#             return
#         raise ValueError('Old pin is not correct')
#
# class ChildCredit(CreditCard):
#     def __init__(self, number, exp_date, cvv, name, pin, child_name):
#         super().__init__(number, exp_date, cvv, name, pin)
#         self.child_name = child_name
#
# card = CreditCard(123456789012345, '2022-10', 256, 'Test Name', 7887)
# card.change_pin(7887, 1234)
# print(card._cvv)


# el = ''
# if not el:
#     print('Not el')
# el = None
# if not el:
#     print('Not el')
# el = None
# if el is None:
#     print('Not el')


# class Person:
#     def __init__(self, name, age):
#         self.name = name
#         if age < 0:
#             raise ValueError("Age is not valid")
#         self.age = age
#
# # p = Person("test", -2) #ValueError: Age is not valid
# p = Person("test", 0)



# class Car:
#     def __init__(self, max_speed: int):
#         self.max_speed = max_speed
#
#     def drive(self):
#         print('driving max speed ' + str(self.max_speed))
#
#     #props + tab or props and enter
#     @property
#     def age(self):
#         return
#
#     @age.setter
#     def age(self, value):
#         pass
#
# red_car = Car(200)
# red_car.drive()             # driving max speed 200
# red_car.max_speed = 512     # changes the speed to 447
# red_car.drive()
        