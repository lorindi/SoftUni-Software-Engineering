number = float(input())
output = ""

if number == 0:
    output = "zero"
elif number > 0:
    if number < 1:
        output = "small positive"
    elif number > 1000000:
        output = "large positive"
    else:
        output = "positive"
else:
    if abs(number) < 1:
        output = "small negative"
    elif abs(number) > 1000000:
        output = "large negative"
    else:
        output = "negative"
print(output)
