class Account:
    def __init__(self, id_number: int, name: str, balance: int=0):
        self.id = id_number
        self.name = name
        self.balance = balance

    def credit(self, amount: int):
        self.balance += amount

        return self.balance

    def debit(self, amount: int):
        if self.balance >= amount:
            self.balance -= amount

            return self.balance

        return "Amount exceeded balance"


    def info(self):
        return f"User {self.name} with account {self.id} has {self.balance} balance"


account = Account(1234, "George", 1000)
print(account.credit(500))
print(account.debit(1500))
print(account.info())
