
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for modulo operation

int test(int n); // Declare the function 'test' with an integer parameter

int main(void)
{
    // Call the function 'test' with argument 3 and print the result
    printf("%d", test(3));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 14 and print the result
    printf("%d", test(14));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 12 and print the result
    printf("%d", test(12));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 37 and print the result
    printf("%d", test(37));
}

// Function definition for 'test'
int test(int n)
{
    // Check if 'n' is divisible by 3 or if 'n' is divisible by 7.
    // Return 1 (true) if either condition is true, otherwise return 0 (false).
    return n % 3 == 0 || n % 7 == 0;
}
