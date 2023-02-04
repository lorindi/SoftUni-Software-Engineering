# входни данни
# обем в куб. см = дължина * широчина * височина
# преобразувам обема от куб. см в литри -> обем в куб. см / 1000
# нужни литри = обем в литри * (1 - процент заето пространство)
# печатаме нужни литри

length = int(input())
width = int(input())
height = int(input())
percent = float(input())

volume_in_cm = length * width * height
volume_in_liters = volume_in_cm / 1000
need_liters = volume_in_liters * (1 - (percent / 100))
print(need_liters)
