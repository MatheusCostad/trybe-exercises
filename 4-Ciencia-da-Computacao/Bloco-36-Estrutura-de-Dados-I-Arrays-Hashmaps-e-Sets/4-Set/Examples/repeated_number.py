def repeated_number(numbers):
    set_number = set()
    for number in numbers:
        if number not in set_number:
            set_number.add(number)
        else:
            return number


if __name__ == "__main__":
    print(repeated_number([1, 3, 2, 4, 5, 1]))
