record_in_seconds = float(input())
distance_in_metres = float(input())
time_in_seconds_for_swimming_one_meter = float(input())

distance_for_swimming_in_seconds = distance_in_metres * time_in_seconds_for_swimming_one_meter
additional_time = int(distance_in_metres / 15) * 12.5
total_time = distance_for_swimming_in_seconds + additional_time

if total_time < record_in_seconds:
    print(f'Yes, he succeeded! The new world record is {total_time:.2f} seconds.')
else:
    diff = total_time - record_in_seconds
    print(f'No, he failed! He was {diff:.2f} seconds slower.')