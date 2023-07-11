class ExercisePlan:
    id = 1

    def __init__(self, trainer_id, equipment_id, duration):
        self.id = self.get_next_id()
        self.trainer_id = trainer_id
        self.equipment_id = equipment_id
        self.duration = duration

    @classmethod
    def from_hours(cls, trainer_id, equipment_id, hours):
        minutes = hours * 60
        return cls(trainer_id, equipment_id, minutes)

    @staticmethod
    def get_next_id():
        result = ExercisePlan.id
        ExercisePlan.id += 1
        return result

    def __repr__(self):
        return f"Plan <{self.id}> with duration {self.duration} minutes"
