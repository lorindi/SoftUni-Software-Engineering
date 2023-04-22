# повтаряме: четем дестинации
# спираме: дестинация == "End"
# продължавам: дестинация != "End"

destination = input()
while destination != "End":
    need_money = float(input()) #нужните пари за екскурзията
    available_money = 0 #налични пари
    # повтаряме: събира пари
    # стоп: налични >= нужните
    # продължава: налични < нужни
    while available_money < need_money:
        saved_money = float(input())
        available_money += saved_money
    else: #available >= need
        print(f'Going to {destination}!')

    destination = input()