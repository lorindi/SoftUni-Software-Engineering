def add_songs(*args):
    songs, print_result = {}, ""
    for song_name, text in args:
        songs[song_name] = songs.get(song_name, []) + text

    for k, v in songs.items():
        print_result += f'- {k}\n' + "\n".join(v)
        if v:
            print_result += "\n"

    return print_result


