#1. read speed (float)
#	При скорост до 10 (включително) отпечатайте "slow" - OK
#	При скорост над 10 и до 50 (включително) отпечатайте "average"
#	При скорост над 50 и до 150 (включително) отпечатайте "fast"
#	При скорост над 150 и до 1000 (включително) отпечатайте "ultra fast"
#	При по-висока скорост отпечатайте "extremely fast"

speed = float(input())

if speed <= 10:
    print("slow")
elif 10 < speed <= 50:
    print("average")
elif 50 < speed <= 150:
    print("fast")
elif 150 < speed <= 1000:
    print("ultra fast")
elif speed > 1000:
    print("extremely fast")
