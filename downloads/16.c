#include <stdio.h>

int main() {
    int num1, rem1;   // Declare two integer variables 'num1' and 'rem1'.

    printf("Input an integer: ");   // Prompt the user to input an integer.

    // Check the return value of scanf
    if (scanf("%d", &num1) != 1) {
        fprintf(stderr, "Error reading input. Please enter a valid integer.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    rem1 = num1 % 2;   // Calculate the remainder of 'num1' when divided by 2.

    if (rem1 == 0)   // Check if the remainder is equal to 0.
        printf("%d is an even integer\n", num1);   // Print a message indicating that 'num1' is an even integer.
    else
        printf("%d is an odd integer\n", num1);    // Print a message indicating that 'num1' is an odd integer.

    return 0;   // Return 0 to indicate successful execution.
}
