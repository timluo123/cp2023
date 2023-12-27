#include <stdio.h>

int tot_mins;  /* given number of minutes */
int hrs;        /* number of hours (to be computed) */
int mins;       /* number of minutes (to be computed) */

const int MINaHOUR = 60;      /* number of minutes in an hour */

char line_text[50];      /* line of input from keyboard */

int main() {
    printf("Input minutes: ");   // Prompt the user to input minutes.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        printf("Error reading input.\n");
        return 1;  // Return an error code.
    }

    sscanf(line_text, "%d", &tot_mins);   // Convert the input to an integer and store it in 'tot_mins'.

    if (tot_mins < 0) {
        printf("Please enter a non-negative value for minutes.\n");
        return 1;  // Return an error code.
    }

    hrs = (tot_mins / MINaHOUR);   // Calculate the number of hours.
    mins = (tot_mins % MINaHOUR);   // Calculate the remaining minutes.

    printf("%d Hours, %d Minutes.\n", hrs, mins);   // Print the calculated hours and minutes.

    return 0;   // Return 0 to indicate successful execution of the program.
}
