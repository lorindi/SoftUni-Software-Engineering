from abc import ABC

class BakedFood(ABC):
    def __init__(self, name, portion, price):
        if not name or name.isspace():
            raise ValueError("Name cannot be empty string or whitespace!")
        if price <= 0:
            raise ValueError("Price cannot be less than or equal to zero!")
        self.name = name
        self.portion = portion
        self.price = price
    
    def __repr__(self):
        return " - {name}: {portion: .2f}g - {price: .2f}lv".format(
            name=self.name, portion=self.portion, price=self.price)
