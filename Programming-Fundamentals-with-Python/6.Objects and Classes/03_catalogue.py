class Catalogue:
    products = []

    def __init__(self, name: str):
        self.name = name

    def add_product(self,product_name: str):
        Catalogue.products.append(product_name)
    def get_by_letter(self, first_letter: str):
        return [s for  s in Catalogue.products if s.startswith(first_letter)]
    def __repr__(self):
        returnned_string =  f"Items in the {self.name} catalogue:\n"
        returnned_string += '\n'.join(sorted(Catalogue.products))
        return returnned_string