import sys

n = int(input("Digite um número"))


if __name__ == "__main__":
    number = sys.argv[1]
    print(
        "Soma igual",
        f"{int(number) + n}",
        sep=": ",
    )
