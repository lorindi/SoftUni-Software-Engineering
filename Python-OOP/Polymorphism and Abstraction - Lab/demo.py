class Shape:
    def calculate_area(self):
        pass

class Triangle(Shape):
    def __init__(self, h, side):
        self.h = h
        self.side = side


    def calculate_area(self):
        print('Calculating triangle area...')

class Circle(Shape):
    
    def __init__(self, r):
        self.r = r

    def calculate_area(self):
        print('Calculating triangle area...')

class Rectangle:
    def __init__(self, a, b):
        self.a = a
        self.b = b
        

    def calculate_area(self):
        print('Calculating Rectangle...')

shapes = [Triangle(5, 2), Circle(5), Triangle(8, 9), Triangle(2, 4), Rectangle(2, 4)]

for shape in shapes:
    if isinstance(shape, Circle):
        shape.calculate_area()