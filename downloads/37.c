
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for absolute value function

int test(int x, int y); // Declare the function 'test' with two integer parameters

int main(void)
{
    // Call the function 'test' with arguments 100 and 199, and print the result
    printf("%d", test(100, 199));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 250 and 300, and print the result
    printf("%d", test(250, 300));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 105 and 190, and print the result
    printf("%d", test(105, 190));
}

// Function definition for 'test'
int test(int x, int y)
{
    // Check if either of the following conditions are true:
    // 1. x is between 100 and 200 (inclusive)
    // 2. y is between 100 and 200 (inclusive)
    // Return 1 (true) if either condition is true, otherwise return 0 (false).
    return (x >= 100 && x <= 200) || (y >= 100 && y <= 200);
}
