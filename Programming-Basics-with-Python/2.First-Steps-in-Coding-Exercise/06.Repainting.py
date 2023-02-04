# входни данни
# разходи: боя, найлон, разредител, торбички, майстори
# сума за найлон = (кол. найлон + 2) * 1.50
# сума за боя = (кол. боя + 10%) * 14.50
# сума за разредителя = кол. разредител * 5
# сума за торбички = 0.40
# сума за материали = сума за найлон + сума за боя + сума за разредителя +  сума за торбички
# сума за майстори = цена за час -> (30% от сума за материали)  * общ брой часове
# сума за разходи =  сума за материали + сума за майстори
# отпечатаме разходите

nylon_quantity = int(input())
paint_quantity = int(input())
diluent_quantity = int(input())
workers_hours = int(input())

sum_nylon = (nylon_quantity + 2) * 1.50
sum_paint = (paint_quantity + 0.1 * paint_quantity) * 14.50
sum_diluent = diluent_quantity * 5
sum_bags = 0.40
sum_materials = sum_nylon + sum_paint + sum_diluent + sum_bags
sum_workers = (0.3 * sum_materials) * workers_hours

expenses = sum_materials + sum_workers
print(expenses)


