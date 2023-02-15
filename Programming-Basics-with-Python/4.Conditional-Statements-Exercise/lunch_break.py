from math import ceil

name_of_movie = input()
duration_of_movie = int(input())
duration_of_rest = int(input())

time_for_lunch = duration_of_rest * 1/8
time_for_break = duration_of_rest * 1/4
left_time = duration_of_rest - time_for_lunch - time_for_break

diff = abs(left_time - duration_of_movie)

if left_time >= duration_of_movie:
    print(f'You have enough time to watch {name_of_movie} and left with {ceil(diff)} minutes free time.')
else:
    print(f"You don't have enough time to watch {name_of_movie}, you need {ceil(diff)} more minutes.")