hour_of_exam = int(input())
minute_of_exam = int(input())
hour_of_arrive = int(input())
minute_of_arrive = int(input())

exam_time_in_minutes = (hour_of_exam * 60) + minute_of_exam
arrive_time_in_minutes = (hour_of_arrive * 60) + minute_of_arrive
diff = abs(exam_time_in_minutes - arrive_time_in_minutes)
hour = diff // 60
minutes = diff % 60

if exam_time_in_minutes == arrive_time_in_minutes:
    print('On time')

elif exam_time_in_minutes > arrive_time_in_minutes:
    if diff <= 30:
        print('On time')
        print(f'{diff} minutes before the start')

    elif 30 < diff <= 59:
        print('Early')
        print(f'{diff} minutes before the start')
    else:
        print('Early')
        print(f'{hour}:{minutes:02d} hours before the start')

elif arrive_time_in_minutes > exam_time_in_minutes:
    print('Late')
    if diff < 60:
        print(f'{diff} minutes after the start')
    else:
        print(f'{hour}:{minutes:02d} hours after the start')
