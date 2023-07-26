from abc import ABC

class Table(ABC):
    def __init__(self, table_number, capacity):
        if capacity <= 0:
            raise ValueError("Capacity has to be greater than 0!")
        self.table_number = table_number
        self.capacity = capacity
        self.food_orders = []
        self.drink_orders = []
        self.number_of_people = 0
        self.is_reserved = False

    def reserve(self, number_of_people):
        self.is_reserved = True
        self.number_of_people = number_of_people

    def order_food(self, baked_food):
        self.food_orders.append(baked_food)

    def order_drink(self, drink):
        self.drink_orders.append(drink)

    def get_bill(self):
        drink_price = 0
        food_price = 0
        for food in self.food_orders:
            food_price += food.price
        for drink in self.drink_orders:
            drink_price += drink.price
        return drink_price + food_price

    def clear(self):
        self.food_orders = []
        self.drink_orders = []
        self.number_of_people = 0
        self.is_reserved = False

    def free_table_info(self):
        if not self.is_reserved:
            return """\"Table: {number}\"
            \"Type: {table_type}\"
            \"Capacity: {capacity}\"
            """.format(
                number=self.table_number,
                table_type=type(self).__name__,
                capacity=self.capacity 
            )
