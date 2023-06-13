# from collections import deque
#
#
# def sum_material_magic(a, b):
#     return a + b
#
#
# def present_creating(result_sum):
#     if result_sum in gem_range:
#         wedding_presents["Gemstone"] += 1
#
#     elif result_sum in porcelain_range:
#         wedding_presents["Porcelain Sculpture"] += 1
#
#     elif result_sum in gold_range:
#         wedding_presents["Gold"] += 1
#
#     elif result_sum in diamond_range:
#         wedding_presents["Diamond Jewellery"] += 1
#
#
# def under_100(fail_result, material, magic):
#     if fail_result % 2 == 0:
#         even_result = (material * 2) + (magic * 3)
#         return even_result
#     elif fail_result % 2 != 0:
#         odd_result = (material + magic) * 2
#         return odd_result
#
#
# def more_then_499(failed_result):
#     return failed_result // 2
#
#
# gem_range = [gem for gem in range(100, 199 + 1)]
# porcelain_range = [porcelain for porcelain in range(200, 299, + 1)]
# gold_range = [gold for gold in range(300, 399 + 1)]
# diamond_range = [diamond for diamond in range(400, 499 + 1)]
#
# wedding_presents = {
#     "Gemstone": 0,
#     "Porcelain Sculpture": 0,
#     "Gold": 0,
#     "Diamond Jewellery": 0
# }
#
# materials = list(map(int, input().split()))
# magic_level = deque(map(int, input().split()))
#
# while materials and magic_level:
#     current_material = materials.pop()
#     current_magic = magic_level.popleft()
#     result = sum_material_magic(current_material, current_magic)
#
#     if result < 100:
#         new_result = under_100(result, current_material, current_magic)
#         if new_result in range(100, 499 + 1):
#             present_creating(new_result)
#
#     elif result >= 500:
#         upgrade_result = more_then_499(result)
#         if upgrade_result in range(100, 499 + 1):
#             present_creating(upgrade_result)
#
#     elif 100 <= result <= 499:
#         present_creating(result)
#
# if wedding_presents["Gemstone"] > 0 and wedding_presents["Porcelain Sculpture"] > 0 or wedding_presents["Gold"] > 0 \
#         and wedding_presents["Diamond Jewellery"] > 0:
#     print("The wedding presents are made!")
# else:
#     print("Aladdin does not have enough wedding presents.")
#
# if materials:
#     print(f"Materials left: {', '.join(map(str, materials))}")
#
# if magic_level:
#     print(f"Magic left: {', '.join(map(str, magic_level))}")
#
# sorted_dict = sorted(wedding_presents.items())
# for present, number in sorted_dict:
#     if number > 0:
#         print(f"{present}: {number}")

