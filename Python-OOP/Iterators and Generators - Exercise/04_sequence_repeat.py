class sequence_repeat:
    def __init__(self, some_string, n):
        self.some_string = some_string
        self.n = n
        self.index = 0
        self.counter = 1

    def __iter__(self):
        return self

    def __next__(self):
        if self.counter > self.n:
            raise StopIteration
        if self.index == len(self.some_string):
            self.index = 0
        symbol = self.some_string[self.index]
        self.index += 1
        self.counter += 1
        return symbol

# result = sequence_repeat('abc', 5)
# for item in result:
#     print(item, end='')