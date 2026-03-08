"""Simple program to check whether a number is even or odd."""


def check_even_odd(num):
    """Check if the given number is even or odd."""
    if num % 2 == 0:
        print("Even number")
    else:
        print("Odd number")


number = int(input("Enter a number: "))
check_even_odd(number)
