#include <stdio.h> // Include standard input/output library

int test(int n); // Declare the function 'test' with an integer parameter

int main(void)
{
    // Call the function 'test' with argument 53 and print the result
    printf("%d", test(53));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 30 and print the result
    printf("%d", test(30));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 51 and print the result
    printf("%d", test(51));
}

// Function definition for 'test'
int test(int n)
{
    const int x = 51; // Declare and initialize constant variable 'x'

    if (n > x) // Check if 'n' is greater than 'x'
    {
        return (n - x) * 3; // Return the result of the expression (n - x) multiplied by 3
    }

    return x - n; // Return the result of the expression x minus n
}
