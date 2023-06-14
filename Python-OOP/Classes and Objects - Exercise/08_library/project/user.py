class User:
    def __init__(self, user_id, username):
        self.user_id = user_id
        self.username = username
        self.books = []

    def info(self):
        result = ", ".join(sorted(self.books))
        return result

    def __str__(self):
        return f"{self.user_id}, {self.username}, {self.books}"
