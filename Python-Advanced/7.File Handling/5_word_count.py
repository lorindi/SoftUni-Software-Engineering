import re

searched_words = []
with open("words.txt") as file:
    searched_words = file.read().split()
words_count = {}
with open("input.txt") as file:
    text = file.read()
    for word in searched_words:
        pattern = fr"\b{word}\b"
        count = len(re.findall(pattern,text, re.IGNORECASE))
        words_count[word] = count
with open("output.txt", "w") as file:
    sorted_result = sorted(words_count.items(), key=lambda kvpt: - kvpt[1])
    for key, value in sorted_result:
        file.writelines(f"{key} - {value}\n")
#2
import re


def read_searched_words(file_path):
    searched_words = []
    with open(file_path) as file:
        searched_words = file.read().split()
    return searched_words


def calculate_words_count(searched_words, file_path):
    words_count = {}
    with open(file_path) as file:
        text = file.read()
        for word in searched_words:
            pattern = fr"\b{word}\b"
            count = len(re.findall(pattern, text, re.IGNORECASE))
            words_count[word] = count
    return words_count


def store_result(result, output_file_path):
    with open(output_file_path, "w") as file:
        sorted_result = sorted(result.items(), key=lambda kvpt: -kvpt[1])
        for key, value in sorted_result:
            file.writelines(f"{key} - {value}\n")


words = read_searched_words("words.txt")
result = calculate_words_count(words, "input.txt")
store_result(result, "output.txt")