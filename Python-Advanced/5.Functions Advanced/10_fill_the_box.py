def fill_the_box(height, lenght, width, *args):
    volume = height * lenght * width
    left_cubes = 0

    for el in args:
        if el == 'Finish':
            break

        if volume >= el:
            volume -= el
        else:
            el -= volume
            left_cubes += el
            volume = 0
    if volume:
        return f'There is free space in the box. You could put {volume} more cubes.'
    else:
        return f'No more free space! You have {left_cubes} more cubes.'



print(fill_the_box(5, 5, 2, 40, 11, 7, 3, 1, 5, "Finish"))