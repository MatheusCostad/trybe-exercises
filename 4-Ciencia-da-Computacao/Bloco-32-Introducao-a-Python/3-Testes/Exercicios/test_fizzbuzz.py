from fizzbuzz import fizzbuzz


def test_fizzbuzz():
    assert fizzbuzz(2) == [1, 2]
    assert "FizzBuzz" in fizzbuzz(15)
    assert "Fizz" in fizzbuzz(3)
    assert "Buzz" in fizzbuzz(5)
