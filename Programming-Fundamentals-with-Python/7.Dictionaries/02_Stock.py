data = input().split(" ")
search_data = input().split(" ")
bakery = dict()

for i in range(0, len(data), 2):
    food = data[i]
    quantity = int(data[i + 1])
    bakery[food] = quantity

for search_term in search_data:
    if search_term in bakery.keys():
        print(f"We have {bakery[search_term]} of {search_term} left")
        # bakery[search_term] - ще вземе тази дума и ще провери в речника тази дума и каква му е стойността.
    else:
        print(f"Sorry, we don't have {search_term}")