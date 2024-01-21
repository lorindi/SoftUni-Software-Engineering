import datetime
import random
import time

breads = [
    'white',
    'nuts',
    'banana',
]

cheeses = [
    'yellow cheese',
    'brie',
    'white cheese',
]


def buy_bread():
    time.sleep(1)

    return random.choice(breads)


def slice_bread(bread):
    time.sleep(0.5)
    return 'sliced ' + bread


def buy_cheese():
    time.sleep(1.5)

    return random.choice(cheeses)


def slice_cheese(cheese):
    time.sleep(3.5)
    return 'sliced ' + cheese


def buy_butter():
    time.sleep(2)
    return 'butter'


def slice_butter(butter):
    time.sleep(1.5)
    return 'sliced ' + butter


def make_sandwich(sliced_cheese, sliced_bread, sliced_butter):
    time.sleep(1.7)
    return sliced_cheese + ' ' + sliced_bread + ' ' + sliced_butter


def run_sync():
    bread = buy_bread()
    sliced_bread = slice_bread(bread)
    cheese = buy_cheese()
    sliced_cheese = slice_cheese(cheese)
    butter = buy_butter()
    sliced_butter = slice_butter(butter)
    sandwich = make_sandwich(sliced_cheese, sliced_bread, sliced_butter)
    print(sandwich)


def run():
    start = datetime.datetime.now()
    run_sync()
    end = datetime.datetime.now()
    print(f'Sandwich ready in {end - start} seconds')


run()
