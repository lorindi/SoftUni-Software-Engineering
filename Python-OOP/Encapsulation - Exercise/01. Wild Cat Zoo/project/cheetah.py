from project.animal import Animal


class Cheetah(Animal):

    MONEY_FOR_CARE = 60
    def __init__(self, name, gender, age):
        super().__init__(name, gender, age, self.MONEY_FOR_CARE)