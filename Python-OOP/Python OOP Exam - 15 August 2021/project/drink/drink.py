from abc import ABC, abstractmethod

class Drink(ABC):
    def __init__(self, name, portion, price, brand):
        if not name or name.isspace():
            raise ValueError("Name cannot be empty string or whitespace!")
        if portion <= 0:
            raise ValueError("Portion cannot be less than or equal to zero!")
        if not brand or brand.isspace():
            raise ValueError("Brand cannot be empty string or whitespace!")
        self.name = name
        self.portion = portion
        self.price = price
        self.brand = brand

    def __repr__(self):
        return " - {name} {brand} - {portion}ml - {price}lv".format(
            name=self.name, brand=self.brand, portion=self.portion, price=self.price
        )
