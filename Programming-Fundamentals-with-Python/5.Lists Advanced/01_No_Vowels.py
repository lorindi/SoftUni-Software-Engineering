vowels = ["o", "a", "u", "e", "i"]
text = input()
# no_vowels_text = []
#
# for ch in text:
#     if ch not in vowels:
#         no_vowels_text.append(ch)

no_vowels_text = list(ch for ch in text if ch not in vowels)
print("".join(no_vowels_text))