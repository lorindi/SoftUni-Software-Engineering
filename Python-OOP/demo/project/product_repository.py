from project.product import Product

class ProductRepository(Product):
    def __init__(self):
        self.products = []

    def add(self, product: Product):
