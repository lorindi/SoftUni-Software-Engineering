nums = [ -num if num > 0 else abs(num) for num in list(map(int, input().split(' ')))]
print(nums)