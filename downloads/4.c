#include <stdio.h>

float kmph;              /* kilometers per hour */
float miph;              /* miles per hour (to be computed) */
char  line_text[50];      /* a line from the keyboard */

int main() {
    printf("Input kilometers per hour: ");   // Prompt the user to input kilometers per hour.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input.\n");
        return 1;  // Return an error code.
    }

    if (sscanf(line_text, "%f", &kmph) != 1) {
        fprintf(stderr, "Error: Invalid input. Please enter a numeric value.\n");
        return 1;  // Return an error code.
    }

    miph = kmph * 0.6213712;   // Convert kilometers per hour to miles per hour.
    printf("%f miles per hour\n", miph);   // Print the result in miles per hour.

    return 0;   // Return 0 to indicate successful execution of the program.
}
