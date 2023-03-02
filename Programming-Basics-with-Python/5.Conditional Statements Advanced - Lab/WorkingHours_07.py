hours = int(input())
day_of_week = input()

# open -> денят ми е Monday -> Saturday и часът е от 10 до 18
# closed -> денят ми е Sunday или е < 10 или > 18

is_working_day = day_of_week == "Monday" or day_of_week == "Tuesday" or day_of_week == "Wednesday" or day_of_week == "Thursday" or day_of_week == "Friday" or day_of_week == "Saturday"
is_working_hour = 10 <= hours <= 18

if is_working_day and is_working_hour:
    print("open")
else:
    print("closed")
