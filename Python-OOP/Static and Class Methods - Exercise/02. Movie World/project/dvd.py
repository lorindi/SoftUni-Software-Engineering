from calendar import month_name


class DVD:
    def __init__(self, name: str, id: int, creation_year: int, creation_month: str, age_restriction: int):
        self.name = name
        self.id = id
        self.creation_year = creation_year
        self.creation_month = creation_month
        self.age_restriction = age_restriction
        self.is_rented = False

    @classmethod
    def from_date(cls, id: int, name: str, date: str, age_restriction: int):
        time_data = date.split(".")
        month_data = int(time_data[1])
        month = month_name[month_data]
        year = int(time_data[2])
        return cls(name, id, year, month, age_restriction)

    def __repr__(self):
        status = 'rented' if self.is_rented else 'not rented'
        # if self.is_rented:
        #     status = "rented"
        # else:
        #     status = "not rented"
        return f"{self.id}: {self.name} ({self.creation_month} {self.creation_year}) has age restriction " \
               f"{self.age_restriction}. Status: {status}"
