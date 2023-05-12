grade_data = float(input())

def solve(grade_data):
    if 2.00 <= grade_data <= 2.99:
        return 'Fail'
    elif 3.00 <= grade_data <= 3.49:
        return 'Poor'
    elif 3.50 <= grade_data <= 4.49:
        return 'Good'
    elif 4.50 <= grade_data <= 5.49:
        return 'Very Good'
    elif 5.50 <= grade_data <= 6.00:
        return 'Excellent'
print(solve(grade_data))