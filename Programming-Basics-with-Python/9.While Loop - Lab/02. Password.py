username = input()
password = input()

# повтаряме: въвеждаме парола
# спираме: въведената парола == password
# продължаваме: въведенета парола != password
entered_password = input()

while entered_password != password:
    entered_password = input()
else: # entered_password == password
    print(f"Welcome {username}!")
