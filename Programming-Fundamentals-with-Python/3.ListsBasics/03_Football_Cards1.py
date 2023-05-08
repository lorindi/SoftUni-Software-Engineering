info = input().split(' ')
team_a_players = 11
team_b_players = 11
players_loses = list()
condition = False
for card in info:
    if card not in players_loses:
        players_loses.append(card)
        if 'A' in card:
            team_a_players -= 1
        elif "B" in card:
            team_b_players -= 1
        if team_a_players < 7 or team_b_players < 7:
            condition = True
            break
print(f'Team A - {team_a_players}; Team B - {team_b_players}')

if condition:
    print("Game was terminated")