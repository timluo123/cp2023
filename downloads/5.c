#include <stdio.h>

int hrs;          /* given number of hours */
int mins;         /* given number of minutes */
int tot_mins;     /* total number of minutes (to be computed) */

const int MINaHOUR = 60;      /* number of minutes in an hour */

char line_text[50];      /* line of input from the keyboard */

int main() {
    printf("Input hours: ");   // Prompt the user to input hours.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input for hours.\n");
        return 1;  // Return an error code.
    }

    if (sscanf(line_text, "%d", &hrs) != 1) {
        fprintf(stderr, "Error: Invalid input for hours. Please enter an integer.\n");
        return 1;  // Return an error code.
    }

    printf("Input minutes: ");   // Prompt the user to input minutes.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input for minutes.\n");
        return 1;  // Return an error code.
    }

    if (sscanf(line_text, "%d", &mins) != 1) {
        fprintf(stderr, "Error: Invalid input for minutes. Please enter an integer.\n");
        return 1;  // Return an error code.
    }

    tot_mins = mins + (hrs * MINaHOUR);   // Calculate the total number of minutes.

    printf("Total: %d minutes.\n", tot_mins);   // Print the total number of minutes.

    return 0;   // Return 0 to indicate successful execution of the program.
}
