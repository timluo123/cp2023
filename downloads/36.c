
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for absolute value function

int test(int temp1, int temp2); // Declare the function 'test' with two integer parameters

int main(void)
{
    // Call the function 'test' with arguments 120 and -1, and print the result
    printf("%d", test(120, -1));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments -1 and 120, and print the result
    printf("%d", test(-1, 120));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 2 and 120, and print the result
    printf("%d", test(2, 120));
}

// Function definition for 'test'
int test(int temp1, int temp2)
{
    // Check if either of the following conditions are true:
    // 1. temp1 is less than 0 and temp2 is greater than 100
    // 2. temp2 is less than 0 and temp1 is greater than 100
    // Return 1 (true) if either condition is true, otherwise return 0 (false).
    return temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100;
}
