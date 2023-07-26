from drink.drink import Drink

class Tea(Drink):
    def __init__(self, name, portion, brand):
        super.__init__(name=name, portion=portion, brand=brand, price=2.50)
