class countdown_iterator:
    def __init__(self, count):
        self.count = count
        self.start_down = self.count

    def __iter__(self):
        return self

    def __next__(self):
        if self.start_down == - 1:
            raise StopIteration
        result = self.start_down
        self.start_down -= 1
        return result


# iterator = countdown_iterator(10)
# for item in iterator:
#     print(item, end=" ")