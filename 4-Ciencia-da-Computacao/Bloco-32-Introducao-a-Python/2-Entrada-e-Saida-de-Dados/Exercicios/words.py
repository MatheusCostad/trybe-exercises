import random

words = []

with open("words.txt") as file:
    for word in file:
        w = word.rstrip("\n")
        words.append((w, "".join(random.sample(w, len(w)))))

randomWord = random.choice(words)


n = 0

while n != 3:
    answer = input(f"Decifre a seguinte palavra: {randomWord[1]}\n")
    if answer == randomWord[0]:
        print("Parabéns!!! Você acertou.")
        n = 3
    else:
        print("Errooou!!!")
        n += 1

print(f"A palavra correta era: {randomWord[0]}")
