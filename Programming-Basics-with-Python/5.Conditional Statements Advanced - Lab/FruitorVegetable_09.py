product = input()

# banana, apple, kiwi, cherry, lemon и grapes -> fruit
# tomato, cucumber, pepper и carrot -> vegetable
# others -> unknown

if product == "banana" or product == "apple" or product == "kiwi" or product == "cherry" or product == "lemon" or product == "grapes":
    print("fruit")
elif product == "tomato" or product == "cucumber" or product == "pepper" or product == "carrot":
    print("vegetable")
else:
    print("unknown")