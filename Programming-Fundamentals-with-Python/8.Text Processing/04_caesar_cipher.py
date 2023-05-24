def caesar_cipher(text):
    result = [chr(ord(ch) + 3) for ch in text]
    print(''.join(result))

text = input()
caesar_cipher(text)