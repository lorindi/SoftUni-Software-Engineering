age = int(input())
drink = ""

if age <= 14:
    drink = "drink toddy"
elif 14 < age <= 18:
    drink = "drink coke"
elif 18 < age <= 21:
    drink = "drink beer"
else:
    drink = "drink whisky"

print(drink)
