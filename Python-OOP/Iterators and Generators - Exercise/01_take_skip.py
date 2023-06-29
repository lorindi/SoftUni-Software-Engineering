class take_skip:
    def __init__(self, step, count):
        self.step = step
        self.count = count
        self.num_to_return = 0

    def __iter__(self):
        return self

    def __next__(self):
        if self.count == 0:
            raise StopIteration
        number = self.num_to_return
        self.num_to_return += self.step
        self.count -= 1
        return number


# numbers = take_skip(2, 6)
# for number in numbers:
#     print(number)