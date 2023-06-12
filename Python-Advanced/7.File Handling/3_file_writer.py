with open("my_first_file.txt", "w") as file:
    file.writelines('I just created my first file!')

with open("my_first_file.txt", "w") as file:
    file.writelines('Second line') # "w" -автоматично изтрива първият текст и го замена.

# with open("my_first_file.txt", "а") as file:
#     file.writelines('I just created my first file!\n')
#
# with open("my_first_file.txt", "а") as file:
#     file.writelines("Second line") # "w" -автоматично изтрива първият текст и го замена.












