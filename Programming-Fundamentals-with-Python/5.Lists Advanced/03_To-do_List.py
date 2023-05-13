todo = ["" for i in range(11)]

command = input()

while command != "End":
    explode = command.split("-")
    priority = int(explode[0])
    task = explode[1]
    todo[priority] = task
    command = input()
final_todo = [task for task in todo if task != ""]

print(final_todo)