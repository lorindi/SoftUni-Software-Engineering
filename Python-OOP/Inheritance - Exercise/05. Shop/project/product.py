class Product:
    def __init__(self, name, quantity):
        self.name = name
        self.quantity = quantity

    def decrease(self, quantity):
        if self.quantity >= quantity:
            self.quantity -= quantity

    def increase(self, quantity):
        self.quantity += quantity

    def __repr__(self):
        return self.name

    # def __str__(self):
    #     return f'{self.name} - {self.quantity}'