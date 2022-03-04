def count_letters(words, chars):
    letters = {}
    sum_length = 0

    for char in chars:
        if char not in letters:
            letters[char] = 1
        else:
            letters[char] += 1

    for word in words:
        word_letters = {}
        for letter in word:
            if letter not in letters:
                break
            if letter not in word_letters:
                word_letters[letter] = 1
            else:
                word_letters[letter] += 1
                if word_letters[letter] > letters[letter]:
                    break
        else:
            sum_length += len(word)

    return sum_length


print(count_letters(["hello", "world", "students"], "welldonehoneyr"))
