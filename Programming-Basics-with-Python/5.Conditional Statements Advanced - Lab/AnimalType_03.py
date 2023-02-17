animal = input()
# dog -> mammal
# crocodile, tortoise, snake -> reptile
# others -> unknown

if animal == "dog":
    print("mammal")
elif animal == "crocodile" or animal == "tortoise" or animal == "snake":
    print("reptile")
else:
    print("unknown")