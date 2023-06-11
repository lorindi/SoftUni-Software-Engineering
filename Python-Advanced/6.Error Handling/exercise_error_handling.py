# numbers_dictionary = {}
# line = input()
# while line != "Search":
#     number_as_string = line
#     try:
#         number = int(input())
#         numbers_dictionary[number_as_string] = number
#     except ValueError:
#         print("The variable number must be an integer")
#     line = input()
# line = input()
# while line != "Remove":
#     searched = line
#     try:
#         print(numbers_dictionary[searched])
#     except KeyError:
#         print("Number does not exist in dictionary")
#     line = input()
# line = input()
# while line != "End":
#     searched = line
#     try:
#         del numbers_dictionary[searched]
#     except KeyError:
#         print("Number does not exist in dictionary")
#     line = input()
# print(numbers_dictionary)
#2
class NameTooShortError(Exception):
    pass


class MustContainAtSymbolError(Exception):
    pass


class InvalidDomainError(Exception):
    pass


def is_domain_invalid(domain, valid_domains):
    result = True
    for valid_domain in valid_domains:
        if domain.endswith(valid_domain):
            result = False
            break
    return result


valid_domains = ['.com', '.bg', '.org', '.net']

while True:
    email = input()
    if email == 'End':
        break

    if '@' not in email:
        raise MustContainAtSymbolError('Email must contain @')

    username, domain = email.split('@')

    if len(username) <= 4:
        raise NameTooShortError('Name must be more than characters')

    if is_domain_invalid(domain, valid_domains):
        raise InvalidDomainError(f'Domain must be one of the following: {", ".join(valid_domains)}')
    print('Email is valid')















