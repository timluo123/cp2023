#include <stdio.h> // Include standard input/output library

int test(int x, int y); // Declare the function 'test' with two integer parameters

int main(void)
{
    // Call the function 'test' with arguments 1 and 2 and print the result
    printf("%d", test(1, 2));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 2 and 2 and print the result
    printf("%d", test(2, 2));
}
// Function definition for 'test'
int test(int x, int y)
{
    // Conditional expression: If x is equal to y, return (x + y) multiplied by 3, otherwise return x + y
    return x == y ? (x + y) * 3 : x + y;
}
