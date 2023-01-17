square_meters_of_landscaping = float(input())
sum = square_meters_of_landscaping * 7.61
discount = sum * 0.18
final_price_of_the_service = sum - discount
print(f"The final price is: {final_price_of_the_service} lv.")
print(f"The discount is: {discount} lv.")