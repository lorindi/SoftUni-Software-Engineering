number_of_tournaments = int(input())
starting_points = int(input())
points = 0
wins = 0

for _ in range(number_of_tournaments):
    stage_of_tournament = input()

    if stage_of_tournament == 'W':
        points += 2000
        wins += 1

    elif stage_of_tournament == 'F':
        points += 1200

    elif stage_of_tournament == 'SF':
        points += 720

final_points = points + starting_points
average_points = int(points / number_of_tournaments)
percent_of_wins = wins / number_of_tournaments * 100

print(f'Final points: {final_points}')
print(f'Average points: {average_points}')
print(f'{percent_of_wins:.2f}%')