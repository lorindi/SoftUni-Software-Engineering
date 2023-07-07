class vowels:
    ALL_VOWELS = 'AEOUIaeoui'
    def __init__(self, text: str):
        self.text = text
        self.vowels_in_text = [el for el in self.text if el in vowels.ALL_VOWELS]

    def __iter__(self):
        return self

    def __next__(self):
        if not self.vowels_in_text:
            raise StopIteration

        return self.vowels_in_text.pop(0)


my_string = vowels('AuOei')

for char in my_string:
    print(char)