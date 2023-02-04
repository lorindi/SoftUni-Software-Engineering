# такса -> въвеждаме
# цена за кецове = такса - 40 %
# цена за екип = цена за кецове - 20%
# цена за топка = цена за екип * 1 / 4
# цена за аксесоарите = цена за топка * 1 / 5
# разходи = такса + цена за кецове + цена за екип + цена за топка +  цена за аксесоарите
# печатаме разходи
tax_per_year = int(input())
price_trainers = tax_per_year - 0.4 * tax_per_year # 0.6 * tax_per_year
price_suit = price_trainers - 0.2 * price_trainers # 0.8 * price_trainers
price_ball = price_suit / 4
price_acc = price_ball / 5

expenses = tax_per_year + price_trainers + price_suit + price_ball + price_acc
print(expenses)
