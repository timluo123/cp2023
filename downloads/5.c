#include <stdio.h>

int main() {
    int monno;  // Declare a variable to store the input month number.

    printf("Input Month No : ");  // Prompt the user to input a month number.

    // Check the return value of scanf for successful input
    if (scanf("%d", &monno) != 1) {
        printf("Invalid input. Please enter a valid month number.\n");
        return 1;  // Indicate an error
    }

    switch(monno)  // Start a switch statement based on the input month number.
    {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            printf("Month has 31 days.\n");  // Print a message for months with 31 days.
            break;
        case 2:
            printf("The 2nd month is February and has 28 or 29 days.\n");  // Print a message for February with 28 or 29 days.
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            printf("Month has 30 days.\n");  // Print a message for months with 30 days.
            break;
        default:
            printf("Invalid Month number.\nPlease try again....\n");  // Print a message for an invalid input.
            break;
    }

    return 0;  // Indicate successful execution
}
