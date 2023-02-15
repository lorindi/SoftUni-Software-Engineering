Peter_s_budget = float(input())
the_number_of_video_cards = int(input())
the_number_of_processors = int(input())
the_number_of_ram = int(input())

sum_video_card = the_number_of_video_cards * 250

price_processor = sum_video_card * 0.35
sum_processor =  the_number_of_processors * price_processor

price_ram_memory = sum_video_card * 0.10
sum_ram_memory = the_number_of_ram * price_ram_memory

total_price = sum_video_card + sum_processor + sum_ram_memory

if the_number_of_video_cards > the_number_of_processors:
    total_price = total_price - total_price * 0.15

diff = abs(Peter_s_budget - total_price)

if Peter_s_budget >= total_price:
    print(f"You have {diff:.2f} leva left!")
else:
    print(f"Not enough money! You need {diff:.2f} leva more!")