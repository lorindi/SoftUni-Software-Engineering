year = int(input())

is_happy_year = False

while not is_happy_year:
    year += 1
    str_year = str(year)
    set_year = set()
    for i in range(len(str_year)):
        set_year.add(str_year[i])

    is_happy_year = len(str_year) == len(set_year)

print(year)