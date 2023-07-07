class Pokemon:
    def __init__(self, pokemon_name, pokemon_health):
        self.pokemon_name = pokemon_name
        self.pokemon_health = pokemon_health

    def pokemon_details(self):
        return f"{self.pokemon_name} with health {self.pokemon_health}"


