class custom_range:
    def __init__(self, start: int, end: int):
        self.start = start
        self.end = end
        self.counter = start

    def __iter__(self):
        return self

    def __next__(self):
        if self.counter > self.end:
            raise StopIteration

        result = self.counter
        self.counter += 1

        return result

for el in custom_range(1, 10):
    print(el)