nums = (float(el) for el in input().split())
occ = {}
for num in nums:
    # print(tupe(num))
    if num not in occ:
        occ[num] = 0
    occ[num] += 1
# print(occ.items())
# for kvp in occ.items():
    # print(kvp)
    # print(type(kvp))
for key, value in occ.items():
    print(f"{key} - {value} times")

#2
nums = tuple([float(el) for el in input().split()])
occ = {}
for num in nums:
    occ[num] = nums.count(num)

for data in occ.items():
    print(f"{data[0]} - {data[1]} times")
