#include <stdio.h>

int hrs;          /* given number of hours */
int mins;         /* given number of minutes */
int tot_mins;     /* total number of minutes (to be computed) */

const int MIN_PER_HOUR = 60;      /* number of minutes in an hour */

char line_text[50];      /* line of input from keyboard */

int main() {
    printf("Input hours: ");   // Prompt the user to input hours.
    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        perror("Error reading hours");
        return 1; // Return non-zero to indicate an error.
    }
    if (sscanf(line_text, "%d", &hrs) != 1) {
        printf("Error: Please enter a valid number for hours.\n");
        return 1; // Return non-zero to indicate an error.
    }

    printf("Input minutes: ");   // Prompt the user to input minutes.
    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        perror("Error reading minutes");
        return 1; // Return non-zero to indicate an error.
    }
    if (sscanf(line_text, "%d", &mins) != 1) {
        printf("Error: Please enter a valid number for minutes.\n");
        return 1; // Return non-zero to indicate an error.
    }

    tot_mins = mins + (hrs * MIN_PER_HOUR);   // Calculate the total number of minutes.

    printf("Total: %d minutes.\n", tot_mins);   // Print the total number of minutes.

    return 0;   // Return 0 to indicate successful execution of the program.
}
