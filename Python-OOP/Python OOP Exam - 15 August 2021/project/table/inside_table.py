from table.table import Table

class InsideTable(Table):
    def __init__(self, table_number, capacity):
        super().__init__(table_number=table_number, capacity=capacity)
        if table_number < 1 or table_number > 50:
            raise ValueError("Inside table's numbere must be between 1 and 50 inclusive!")
