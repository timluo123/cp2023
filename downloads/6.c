#include <stdio.h>  // Include the standard input/output header file.

int main() {
    int j, n;  // Declare variables 'j' for loop counter and 'n' for user input.

    printf("Input the number (Table to be calculated) : ");  // Print a message to prompt user input.

    // Check the return value of scanf for errors
    if (scanf("%d", &n) != 1) {
        printf("Error reading input.\n");
        return 1;  // Indicate an error
    }

    printf("\n");  // Print a newline for formatting.

    for (j = 1; j <= 10; j++) {  // Start a for loop to calculate the table up to 10.
        printf("%d X %d = %d \n", n, j, n * j);  // Print the multiplication expression and result.
    }

    return 0;  // Return 0 to indicate successful execution of the program.
}
