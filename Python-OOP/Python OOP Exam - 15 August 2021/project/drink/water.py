from drink.drink import Drink

class Water(Drink):
    def __init__(self, name, portion, brand):
        super.__init__(name=name, portion=portion, brand=brand, price=1.50)
