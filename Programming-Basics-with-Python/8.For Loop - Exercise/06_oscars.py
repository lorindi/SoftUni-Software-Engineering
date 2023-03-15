name_actor = input()
total_score = float(input())
commission_cnt = int(input())

for n in range(0, commission_cnt):
    name_of_jury = input()
    score_from_jury = float(input())
    length_of_name = len(name_of_jury)

    current_score = (length_of_name * score_from_jury) / 2

    total_score += current_score

    if total_score >= 1250.5:
        break

if total_score >= 1250.5:
    print(f'Congratulations, {name_actor} got a nominee for leading role with {total_score:.1f}!')
else:
    needed_score = 1250.5 - total_score
    print(f"Sorry, {name_actor} you need {needed_score:.1f} more!")