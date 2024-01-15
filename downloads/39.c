
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for additional functions

// Declare the function 'test' with two integer parameters
int test(int x, int y);

int main(void)
{
    // Call the function 'test' with arguments 20 and 84, and print the result
    printf("%d", test(20, 84));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 14 and 50, and print the result
    printf("%d", test(14, 50));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 11 and 45, and print the result
    printf("%d", test(11, 45));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 25 and 40, and print the result
    printf("%d", test(25, 40));
}

// Function definition for 'test'
int test(int x, int y)
{
    // Check if either of the following conditions are true:
    // 1. x is less than or equal to 20 OR y is greater than or equal to 50
    // 2. x is less than or equal to 20 OR y is greater than or equal to 50
    // If any of the conditions are true, return 1 (true). Otherwise, return 0 (false).
    return (x <= 20 || y >= 50) || (x <= 20 || y >= 50);
}
