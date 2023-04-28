film = input()

total_standard = 0
total_students = 0
total_kids = 0

while film != "Finish":
    free_space = int(input())
    filled_space = 0
    while filled_space < free_space:
        ticket = input()

        if ticket == "standard":
            filled_space += 1
            total_standard += 1
        elif ticket == "student":
            filled_space += 1
            total_students += 1
        elif ticket == "kid":
            filled_space += 1
            total_kids += 1
        elif ticket == "End":
            break

    percent_full = filled_space * 100 / free_space
    print(f"{film} - {percent_full:.2f}% full.")
    film = input()

total_tickets = total_students + total_standard + total_kids
percent_students = total_students * 100 / total_tickets
percent_standard = total_standard * 100 / total_tickets
percent_kids = total_kids * 100 / total_tickets

print(f"Total tickets: {total_tickets}")
print(f"{percent_students:.2f}% student tickets.")
print(f"{percent_standard:.2f}% standard tickets.")
print(f"{percent_kids:.2f}% kids tickets.")
