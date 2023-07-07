from new.pokemon import Pokemon
class Trainer:
    def __init__(self, name, pokemons):
        self.name = name
        self.pokemons = pokemons

    def add_pokemon(self, pokemon: Pokemon):
        if pokemon.name not in self.pokemons:
            return f"Caught {pokemon.pokemon_details()}"
        else:
            self.pokemons.append(pokemon)
            return "This pokemon is already caught"

    # def release_pokemon(self, pokemon_name: str):
    #     pass
    #
    # def trainer_data(self):
    #     pass



        
        