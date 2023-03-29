wanted_book = input()
current_book = ""
book_counter = 0
while wanted_book != current_book:
    current_book = input()
    if current_book == "No More Books":
        break
    book_counter += 1
if wanted_book == current_book:
    book_counter -= 1
    print(f"You checked {book_counter} books and found it.")
else:
    print("The book you search is not here!")
    print(f"You checked {book_counter} books.")