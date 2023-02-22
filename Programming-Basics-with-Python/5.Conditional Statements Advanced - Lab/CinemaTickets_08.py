day_of_week = input()
# Monday, Tuesday, Friday -> 12
# Wednesday, Thursday -> 14
# Saturday, Sunday -> 16

if day_of_week == "Monday" or day_of_week == "Tuesday" or day_of_week == "Friday":
    print(12)
elif day_of_week == "Wednesday" or day_of_week == "Thursday":
    print(14)
elif day_of_week == "Saturday" or day_of_week == "Sunday":
    print(16)