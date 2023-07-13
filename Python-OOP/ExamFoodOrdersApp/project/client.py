class Client:
    def __init__(self, phone_number: str):
        self.phone_number = phone_number
        self.shopping_cart = []
        self.bill = 0.0

    @property
    def phone_number(self):
        return self.__phone_number

    @phone_number.setter
    def phone_number(self, value):
        if value[0] != '0' and len(value) < 10 and not value.isdigit():
            raise ValueError("Invalid phone number!")
        self.phone_number = value
