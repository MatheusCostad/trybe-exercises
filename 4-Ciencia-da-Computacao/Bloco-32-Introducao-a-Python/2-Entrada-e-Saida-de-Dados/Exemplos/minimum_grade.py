reprovedStudents = []

with open("students.txt") as students:
    for student in students:
        note = student.split(" ")[1]
        name = student.split(" ")[0]
        if int(note) < 6:
            reprovedStudents.append(f"{name}\n")


with open("reprovedStudents.txt", mode="w") as file:
    file.writelines(reprovedStudents)
