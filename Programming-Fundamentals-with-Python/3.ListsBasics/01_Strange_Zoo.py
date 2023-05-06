first_string = input()
second_string = input()
third_string = input()

meerkat = [first_string,second_string,third_string]

meerkat[0], meerkat[2] = meerkat[2], meerkat[0]

print(meerkat)