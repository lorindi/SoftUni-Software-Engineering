from baked_food.baked_food import BakedFood

class Cake(BakedFood):
    def __init__(self, name, price):
        super().__init__(name=name, portion=245, price=price)
