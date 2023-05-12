def convert_list_to_raund(base_list):
    final_list = list()
    for n in base_list:
        final_n = round(float(n))
        final_list.append(final_n)
    return final_list


input_list = input().split()
print(convert_list_to_raund(input_list))