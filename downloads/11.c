#include <stdio.h>

float kmph;              /* kilometers per hour */
float miph;              /* miles per hour (to be computed) */
char  line_text[50];      /* a line from the keyboard */

int main() {
    printf("Input kilometers per hour: ");   // Prompt the user to input kilometers per hour.
    
    // Check the return value of fgets for errors
    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        perror("Error reading input");
        return 1; // Return non-zero to indicate an error.
    }

    // Check the return value of sscanf for errors
    if (sscanf(line_text, "%f", &kmph) != 1) {
        printf("Error: Please enter a valid number for kilometers per hour.\n");
        return 1; // Return non-zero to indicate an error.
    }

    miph = kmph * 0.6213712;   // Convert kilometers per hour to miles per hour.
    printf("%f miles per hour\n", miph);   // Print the result in miles per hour.

    return 0;   // Return 0 to indicate successful execution of the program.
}
