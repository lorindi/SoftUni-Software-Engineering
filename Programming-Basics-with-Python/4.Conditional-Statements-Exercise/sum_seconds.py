a, b, c = int(input()), int(input()), int(input())

sum_times = a + b + c
minutes = sum_times // 60
seconds = sum_times % 60

print(f'{minutes}:{seconds:02d}')

# if seconds < 10:
#     print(f'{minutes}:0{seconds}')
# else:
#     print(f'{minutes}:{seconds}')

