# за всяка стойност на първия множител (1 до 10)
# -> всяка една стойност на втория множител (1 до 10)

for first in range(1, 11):
    for second in range (1, 11):
        result = first * second
        print(f"{first} * {second} = {result}")