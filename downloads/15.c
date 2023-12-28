#include <stdio.h>

float temp_f;     /* degrees Fahrenheit */
float temp_c;     /* degrees Centigrade */
char line_text[50];  /* a line of input */

int main() {
    printf("Input a temperature (in Centigrade): ");  // Prompt the user to input a temperature in Centigrade.

    // Check the return value of fgets to handle errors
    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    sscanf(line_text, "%f", &temp_c);               // Convert the input from 'line_text' to a float and store it in 'temp_c'.

    temp_f = ((9.0 / 5.0) * temp_c) + 32.0;         // Convert temperature from Centigrade to Fahrenheit and store it in 'temp_f'.
    printf("%f degrees Fahrenheit.\n", temp_f);    // Print the temperature in Fahrenheit.

    return 0;   // Return 0 to indicate successful execution of the program.
}
