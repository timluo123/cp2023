
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for absolute value function

int test(int x); // Declare the function 'test' with an integer parameter

int main(void)
{
    // Call the function 'test' with argument 103 and print the result
    printf("%d", test(103));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 90 and print the result
    printf("%d", test(90));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with argument 89 and print the result
    printf("%d", test(89));
}

// Function definition for 'test'
int test(int x)
{
    // Check if the absolute difference between 'x' and 100 is less than or equal to 10,
    // or if the absolute difference between 'x' and 200 is less than or equal to 10.
    // Return 1 (true) if either condition is true, otherwise return 0 (false).
    if (abs(x - 100) <= 10 || abs(x - 200) <= 10)
        return 1;
    return 0;
}
