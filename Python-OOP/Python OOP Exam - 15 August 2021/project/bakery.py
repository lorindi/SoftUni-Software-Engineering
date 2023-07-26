from baked_food.bread import Bread
from baked_food.cake import Cake
from drink.tea import Tea
from drink.water import Water
from table.inside_table import InsideTable
from table.outside_table import OutsideTable


class Bakery:
    def __init__(self, name):
        if not name or name.isspace():
            raise ValueError("Name cannot  be empty string or whitespace")
        self.name = name
        self.food_menu = []
        self.drinks_menu = []
        self.tables_repository = []
        self.total_income = 0

    def item_exists(self, name, item_list):
        exists = False
        for item in item_list:
            if item.name == name:
                exists = True
                break
        return exists

    def table_exists(self, table_number):
        exists = False
        for table in self.tables_repository:
            if table.table_number == table_number:
                exists = True
                break
        return exists

    def add_food(self, food_type, name, price):
        if self.item_exists(name, self.food_menu):
            raise Exception("{food_type} {name} is already in the menu!".format(food_type=food_type, name=name))
        if food_type == "Bread":
            new_bread = Bread(name=name, price=price)
            self.food_menu.append(new_bread)
        if food_type == "Cake":
            new_cake = Cake(name=name, price=price)
            self.food_menu.append(new_cake)
        return "Added {name} ({food_type}) to the food menu".format(
            name=name, food_type=food_type
        )

    def add_drink(self, drink_type, name, portion, brand):
        if self.item_exists(name, self.drinks_menu):
            raise Exception("{drink_type} {name} is already in the menu!".format(drink_type=drink_type, name=name))
        if drink_type == "Tea":
            new_tea = Tea(name=name, portion=portion, brand=brand)
            self.drinks_menu.append(new_tea)
        if drink_type == "Water":
            new_water = Water(name=name, portion=portion, brand=brand)
            self.drinks_menu.append(new_water)
        return "Added {name} ({brand}) to the drink menu".format(
            name=name, brand=brand
        )

    def add_table(self, table_type, table_number, capacity):
        if self.table_exists(table_number):
            raise Exception("{table_number} is already in the bakery".format(table_number=table_number))
        if table_type == "InsideTable":
            new_table = InsideTable(table_number=table_number, capacity=capacity)
            self.tables_repository.append(new_table)
        if table_type == "OutsideTable":
            new_table = OutsideTable(table_number=table_number, capacity=capacity)
            self.tables_repository.append(new_table)
        return "Added table number {table_number} in the bakery".format(table_number)

    def reserve_table(self, number_of_people):
        for table in self.tables_repository:
            if not table.is_reserved and table.capacity <= number_of_people:
                table.is_reserved = True
                table.number_of_people = number_of_people
                return "Table {table_number} has been reserved for {number_of_people} people".format(
                    table_number=table.table_number, number_of_people= number_of_people
                )
        return "No available table for {number_of_people}".format(number_of_people)

    def order_food(self, table_number, *food_names):
        if not self.table_exists(table_number):
            return "Could not find table {table_number}".format(table_number)
        available_food = []
        missing_food = []
        for food_name in food_names:
            missing = True
            for bakery_food in self.food_menu:
                if bakery_food.name == food_name:
                    missing = False
                    available_food.append(bakery_food)
                    break
            if missing:
                missing_food.append(food_name)
        result = "Table {table_number} ordered:\n"
        for food in available_food:
            result += food
            result += "\n"
        result += "{bakery_name} does not have in the menu\n".format(self.name)
        for food in missing_food:
            result += "{food}\n".format(food)
        return result

    def order_drink(self, table_number, *drinks_names):
        if not self.table_exists(table_number):
            return "Could not find table {table_number}".format(table_number)
        available_drinks = []
        missing_drinks = []
        for drink_name in drinks_names:
            missing = True
            for bakery_drink in self.drinks_menu:
                if bakery_drink.name == drink_name:
                    missing = False
                    available_drinks.append(bakery_drink)
                    break
            if missing:
                missing_drinks.append(drink_name)
        result = "Table {table_number} ordered:\n"
        for drink in available_drinks:
            result += drink
            result += "\n"
        result += "{bakery_name} does not have in the menu\n".format(self.name)
        for drink in missing_drinks:
            result += "{drink}\n".format(drink)
        return result

    def leave_table(self, table_number):
        table = None
        for t in self.tables_repository:
            if t.table_number == table_number:
                table = t
        if table:
            table_bill = 0
            for food_order in table.food_orders:
                table_bill += food_order.price
            for drink_order in table.drink_order:
                table_bill += drink_order.price
            
            return "Table: {table_number}\nBill: {table_bill: .2f}".format(
                table_number, table_bill
            )

    def get_free_tables_info(self):
        result = ""
        for table in self.tables_repository:
            if not table.is_reserved:
                result += table.free_table_info()
                result += "\n"

    def get_total_income(self):
        total_income = 0
        for table in self.tables_repository:
            for food_order in table.food_orders:
                total_income += food_order.price
            for drink_order in table.drink_order:
                total_income += drink_order.price
        return "Total income: {total_income: .2f}".format(total_income)
