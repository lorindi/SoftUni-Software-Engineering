class dictionary_iter:
    def __init__(self, items):
        self.items = items
        self.counter = 0

    def __iter__(self):
        return self

    def __next__(self):

        some_list = [(k, v) for k, v in self.items.items()]
        if self.counter == len(some_list):
            raise StopIteration
        tuple_to_return = some_list[self.counter]
        self.counter += 1
        return tuple_to_return


# result = dictionary_iter({1: "1", 2: "2"})
# for x in result:
#     print(x)