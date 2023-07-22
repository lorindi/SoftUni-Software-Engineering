from project.product import Product

class Food(Product):
    def __init__(self, name, quantity=10):
        super().__init__(name, quantity)