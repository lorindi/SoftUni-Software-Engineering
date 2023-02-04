# входни данни
# брой химикали (int), брой маркери (int), литри преп(int), процент (int)
# сума за химикали = бр. химикали * 5.80
# сума за маркери = бр. маркери * 7.20
# сума за препарата = литри преп * 1.2
# обща сума = сума за химикали + сума за маркери + сума за преп
# отстъпка от общата сума
# отпечатваме общата сума след отстъпката

count_pens = int(input())
count_markers = int(input())
liters_cleaner = int(input())
percent = int(input())

sum_pens = count_pens * 5.80
sum_markers = count_markers * 7.20
sum_cleaner = liters_cleaner * 1.20

total_sum = sum_pens + sum_markers + sum_cleaner

total_sum = total_sum - (total_sum * (percent / 100))
print(total_sum)

