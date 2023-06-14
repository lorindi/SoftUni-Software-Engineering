class Player:

    def __init__(self, name, hp, mp):
        self.name = name
        self.hp = hp
        self.mp = mp
        self.skills = {}
        self.guild = "Unaffiliated"

    def add_skill(self, skill_name, mana_cost):
        if skill_name in self.skills:
            return "Skill already added"
        self.skills[skill_name] = mana_cost
        return f"Skill {skill_name} added to the collection of the player {self.name}"

    def player_info(self):
        return f"Name: {self.name}\n" \
               f"Guild: {self.guild}\n" \
               f"HP: {self.hp}\n" \
               f"MP: {self.mp}\n" + \
               '\n'.join([f'==={s} - {m}' for s, m in self.skills.items()])
        # result = f"Name: {self.name}\n"
        # result += f"Guild: {self.guild}\n"
        # result += f"HP: {self.hp}\n"
        # result += f"MP: {self.mp}\n"
        # for skill_name, mana_cost in self.skills.items():
        #     result += f"==={skill_name} - {mana_cost}\n"
        # return result.strip()

        