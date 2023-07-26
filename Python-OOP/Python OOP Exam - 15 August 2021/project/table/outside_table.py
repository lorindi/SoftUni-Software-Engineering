from table.table import Table

class OutsideTable(Table):
    def __init__(self, table_number, capacity):
        super().__init__(table_number=table_number, capacity=capacity)
        if table_number < 51 or table_number > 100:
            raise ValueError("Outside table's number must be between 51 and 100 inclusive!")
