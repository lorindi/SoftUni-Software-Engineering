from collections import deque

def math_operations(*args, **kwargs):
    nums = deque(args)

    while nums:
        number = nums.popleft()
        kwargs['a'] += number

        if not nums:
            break

        number = nums.popleft()
        kwargs['s'] -= number

        if not nums:
            break

        number = nums.popleft()
        if number != 0:
            kwargs['d'] /= number

        if not nums:
            break

        number = nums.popleft()
        kwargs['m'] *= number

    sorted_result = [f'{key}: {value:.1f}' for key, value in sorted(kwargs.items(), key=lambda x: (-x[1], x[0]))]
    return '\n'.join(sorted_result)

print(math_operations(2.1, 12.56, 0.0, -3.899, 6.0, -20.65, a=1, s=7, d=33, m=15))
print(math_operations(-1.0, 0.5, 1.6, 0.5, 6.1, -2.8, 80.0, a=0, s=(-2.3), d=0, m=0))
print(math_operations(6.0, a=0, s=0, d=5, m=0))
