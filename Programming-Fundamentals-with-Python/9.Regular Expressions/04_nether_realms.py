# Задача 4:

import re


def output(my_dict):
    sorted_dict = sorted(my_dict)

    for x in sorted_dict:
        print(f"{x} - {my_dict[x][0]} health, {my_dict[x][1]:.2f} damage")


def damage(name):
    expression = r"(?P<digits>[\-\+]?(\d+\.?\d+|\d+))"

    matches = re.finditer(expression, name)

    nums = 0

    for match in matches:
        nums += float(match.group("digits"))

    match_damage = re.findall(r"([*\/])", name)

    if len(match_damage) > 0:
        for x in match_damage:
            if x == "*":
                nums *= 2
            elif x == "/":
                nums /= 2

    return nums


def health(name):
    matches = re.findall(r"([^0-9\+\-\*\/\.])", name)

    current_health = 0

    for x in matches:
        current_health += ord(x)

    return current_health


def realms():
    demon_name = input().split(",")

    my_dict = dict()

    for name in demon_name:
        name = name.strip()

        if "" != name and " " not in name and "," not in name:
            current_health = health(name)
            current_damage = damage(name)

            my_dict[name] = list()
            my_dict[name].append(current_health)
            my_dict[name].append(current_damage)

    output(my_dict)


realms()