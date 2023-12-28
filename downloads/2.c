#include <stdio.h>

int main() {
    int chk_year;   // Declare an integer variable 'chk_year'.

    printf("Input a year: ");   // Prompt the user to input a year.

    // Check the return value of scanf for successful input
    if (scanf("%d", &chk_year) != 1) {
        printf("Error: Invalid input. Please enter a valid year.\n");
        return 1;  // Return 1 to indicate an error.
    }

    if ((chk_year % 400) == 0 || ((chk_year % 100) != 0 && (chk_year % 4) == 0)) {
        // Check if 'chk_year' is divisible by 400 or (divisible by 4 but not divisible by 100).
        printf("%d is a leap year.\n", chk_year);   // Print a message indicating that 'chk_year' is a leap year.
    } else {
        printf("%d is not a leap year.\n", chk_year);   // Print a message indicating that 'chk_year' is not a leap year.
    }

    return 0;   // Return 0 to indicate successful execution of the program.
}
