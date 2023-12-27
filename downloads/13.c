#include <stdio.h> // Include standard input/output library

int test(int x, int y); // Declare the function 'test' with two integer parameters

int main(void)
{
    // Call the function 'test' with arguments 25 and 5, and print the result
    printf("%d", test(25, 5));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 20 and 30, and print the result
    printf("%d", test(20, 30));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 20 and 25, and print the result
    printf("%d", test(20, 25));
}

// Function definition for 'test'
int test(int x, int y)
{
    // Return 1 (true) if any of the following conditions are true:
    // 1. x is equal to 30
    // 2. y is equal to 30
    // 3. the sum of x and y is equal to 30
    return x == 30 || y == 30 || (x + y == 30);
}
