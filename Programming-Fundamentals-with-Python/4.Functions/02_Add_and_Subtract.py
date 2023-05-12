def sum_numbers(a,b):
    return a + b

def subtract(current_sum,c):
    return current_sum - c

a,b,c = int(input()),int(input()),int(input())
result = subtract(sum_numbers(a,b),c)
print(result)