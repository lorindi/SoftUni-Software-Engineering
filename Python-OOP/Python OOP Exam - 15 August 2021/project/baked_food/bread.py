from baked_food.baked_food import BakedFood

class Bread(BakedFood):
    def __init__(self, name, price):
        super().__init__(name=name, portion=200, price=price)
