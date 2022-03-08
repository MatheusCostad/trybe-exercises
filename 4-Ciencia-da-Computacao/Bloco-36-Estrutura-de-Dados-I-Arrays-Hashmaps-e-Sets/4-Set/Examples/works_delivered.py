students = ["a", "b", "c", "d", "e", "f", "g"]
list1_delivered = ["a", "d", "g", "c"]
list2_delivered = ["c", "a", "f"]


def work_delivered(students, list1_delivered, list2_delivered):
    set_students = set(students)
    set_list1 = set(list1_delivered)
    set_list2 = set(list2_delivered)
    print(
        f"Estudantes {set_students.difference(set_list1)} não entregaram o primeiro projeto\n",
        f"Os estudantes {set_students.intersection(set_list1, set_list2)} entregam ambos os projetos",
    )


work_delivered(students, list1_delivered, list2_delivered)
