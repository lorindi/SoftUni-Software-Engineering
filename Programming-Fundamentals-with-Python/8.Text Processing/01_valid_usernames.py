def length(username):
    if 3 <= len(username) <= 16:
        return True
    return False

def type_of_symbols(username):
    for character in username:
        if not(character.isalnum() or character == '-' or character == '_'):
            return False

    return True


def redundant(username):
    for character in username:
        if character == '':
            return False
    return True

def username_is_valid(username):
    if length(username) and type_of_symbols(username) and redundant(username):
        return True

usernames = input().split(', ')

for username in usernames:
    if username in usernames:
        if username_is_valid(username):
            print(username)