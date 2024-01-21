import random
import time

import asyncio

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


async def buy_bread():
    await asyncio.sleep(1)

    return random.choice(breads)


async def slice_bread(bread):
    await asyncio.sleep(0.5)
    return 'sliced ' + bread


async def buy_cheese():
    await asyncio.sleep(1.5)

    return random.choice(cheeses)


async def slice_cheese(cheese):
    await asyncio.sleep(3.5)
    return 'sliced ' + cheese


async def buy_butter():
    await asyncio.sleep(2)
    return 'butter'


async def slice_butter(butter):
    await asyncio.sleep(1.5)
    return 'sliced ' + butter


async def prepare_bread():
    bread = await buy_bread()
    sliced_bread = await slice_bread(bread)
    return sliced_bread


async def prepare_cheese():
    cheese = await buy_cheese()
    sliced_cheese = await slice_cheese(cheese)
    return sliced_cheese


async def prepare_butter():
    butter = await buy_butter()
    sliced_butter = await slice_butter(butter)
    return sliced_butter


async def make_sandwich(sliced_cheese, sliced_bread, sliced_butter):
    await asyncio.sleep(1.7)
    return sliced_cheese + ' ' + sliced_bread + ' ' + sliced_butter


async def run_async():
    (sliced_cheese, sliced_bread, sliced_butter) = await asyncio.gather(
        prepare_cheese(),
        prepare_bread(),
        prepare_butter(),
    )

    sandwich = await make_sandwich(sliced_cheese, sliced_bread, sliced_butter)
    print(sandwich)


async def run():
    start = time.time()
    await run_async()
    end = time.time()
    print(f'Sandwich ready in {end - start} seconds')


asyncio.run(run(), debug=True)
