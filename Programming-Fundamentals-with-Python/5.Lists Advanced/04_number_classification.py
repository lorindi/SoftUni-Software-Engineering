def positive_numbers(numbers):
    return [str(num) for num in numbers if num >= 0]

def negative_numbers(numbers):
    return [str(num) for num in numbers if num < 0]

def even_numbers(numbers):
    return [str(num) for num in numbers if num % 2 == 0]

def odd_numbers(numbers):
    return [str(num) for num in numbers if num % 2 != 0]

numbers = [int(s) for s in input().split(", ")]

print(f"Positive: {', '.join(positive_numbers(numbers))}")
print(f"Negative: {', '.join(negative_numbers(numbers))}")
print(f"Even: {', '.join(even_numbers(numbers))}")
print(f"Odd: {', '.join(odd_numbers(numbers))}")
