import random
import time

# Characters to create random passwords
characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "x",
              "y", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "q", "v", "z"]

# The password to guess
target_password = ""

# Set the length of the passwords to generate and guess for bulk runs
password_length = 3

# Number of passwords to crack
reps = [0, 1]

# Flag to stop guessing when attempt is sucessfull
status = "ongoing"

# Number of guesses for all passwords
all_guesses = 0

# Indexes for each character in a password up to eight characters
digits = {1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0}


# Generate a password guess with values from digits array as index in the characters array
def generate():
    global password_length, digits, status

    # Number of characters filled so far
    char_count = 0
    current_guess = ""
    # The current key in the digits array
    index_counter = password_length

    # Create the guess according to current digits array
    while char_count < password_length:
        char_count += 1
        current_guess += characters[digits[char_count]]

    # Incerement the relative key in the digits array for next run
    digits_modded = "no"
    while digits_modded != "yes":
        # Increment end character value if not equal to length of character array
        if digits[index_counter] < (len(characters) - 1):
            digits[index_counter] += 1
            digits_modded = "yes"
        # Otherwise move focus left if not already on first key in digits array
        else:
            if index_counter > 1:
                # Reset value fo existing key
                digits[index_counter] = 0
                # Move left to next key
                index_counter -= 1
                # Increment the value for the new key
                if digits[index_counter] < (len(characters) - 1):
                    digits[index_counter] += 1
                    digits_modded = "yes"
            else:
                # All combinations tried, give up
                digits_modded = "yes"
                status = "not_found"
                print(status, current_guess)
    return current_guess


# Get the starting time to compare to end time for bulk runs
total_time = 0.0

# Until the quota of passwords have been cracked
while reps[0] < reps[1]:
    status = "ongoing"
    # Reset the digits array to default
    for pos in digits:
        digits[pos] = 0

        # If multiple runs, create random target_password for this run
    if reps[1] > 1:
        # Create a string from randomly chosen characters
        target_password = ""
        while len(target_password) < password_length:
            # Append a random index from the characters list to target password
            target_password += random.choice(characters)
        reps[0] += 1

    # For single runs, prompt for target password each time instead
    else:
        target_password = str(input("Enter a password to test: "))
        password_length = len(target_password)
        # Leaving empty will exit main loop
        if target_password == "":
            reps[0] += 1
            status = "stopped"

    # Get the starting time for this run
    this_time = time.time()
    guesses = 0
    # Start guessing until correct
    while status == "ongoing":
        # Generate a new guess
        guesses += 1
        if generate() == target_password:
            elapsed = time.time() - this_time
            status = "Cracked"
            print(status + ": " + target_password)
            print(str(guesses) + " guesses, " + str(elapsed) + " seconds.\n___________\n")
            all_guesses += guesses
            total_time += elapsed

# Calculate and display overall stats for bulk runs
if reps[1] > 1:
    print(str(all_guesses / reps[1]) + " guesses per password")
    print(str(total_time / reps[1]) + " seconds per password")