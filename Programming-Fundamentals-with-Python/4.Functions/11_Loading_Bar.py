def progress(loading_bar):
    if loading_bar == 100:
        return "100% Complete!\n[%%%%%%%%%%]"
    else:
        return f"{loading_bar}% [{'%' * (loading_bar // 10)}{'.' * (10 - loading_bar // 10)}]\nStill loading..."
loading_bar_value = int(input())
print(progress(loading_bar_value))