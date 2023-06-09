def rectangle_area(args):
    return args[0] * args[1]


def rectangle_perimeter(args):
    return (args[0] + args[1]) * 2


def are_arguments_valid(args):
    for el in args:
        if not isinstance(el, int):
            return False
    return True


def rectangle(*args):
    if are_arguments_valid(args):
        return f'Rectangle area: {rectangle_area(args)}\nRectangle perimeter: {rectangle_perimeter(args)}'
    else:
        return 'Enter valid values!'