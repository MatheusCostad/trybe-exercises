class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        self._buckets = [Employee(None, None) for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_name):
        address = self.get_address(id_num)
        self._buckets[address].name = new_name


employees = [
    Employee(14, "name1"),
    Employee(23, "name2"),
    Employee(10, "name3"),
    Employee(9, "name4"),
]

hashable_employees = HashMap()

for employee in employees:
    hashable_employees.insert(employee)

print(hashable_employees.get_value(23))

print(hashable_employees.get_value(10))
hashable_employees.update_value(10, "Rafaela")
print(hashable_employees.get_value(10))
