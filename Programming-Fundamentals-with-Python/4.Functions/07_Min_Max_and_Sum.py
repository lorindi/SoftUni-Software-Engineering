def min_max_sum_func(nums):
    print(f"The minimum number is {min(nums)}")
    print(f"The maximum number is {max(nums)}")
    print(f"The sum number is: {sum(nums)}")

numbers = list(map(int, input().split(' ')))
min_max_sum_func(numbers)