# 1. прочитаме парола (текст)
# 2. проверка дали паролата съвпада с "s3cr3t!P@ssw0rd"
# ако съвпада -> Welcome
# ако не съвпада -> Wrong password!

password = input()
if password == "s3cr3t!P@ssw0rd":
    print("Welcome")
else: #password != "s3cr3t!P@ssw0rd"
    print("Wrong password!")


