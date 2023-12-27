#include <stdio.h>

int num1, num2, num3;   /* declaration of three variables */
int sum;                /* variable to store the sum of numbers */
char line_text[50];     /* line of input from keyboard */

int main() {
    printf("Input three numbers separated by comma : ");   // Prompt the user to input three numbers separated by a comma.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input.\n");
        return 1;  // Return 1 to indicate an error.
    }

    // Clear the input buffer by consuming characters until a newline is encountered
    int c;
    while ((c = getchar()) != '\n' && c != EOF);

    sscanf(line_text, "%d, %d, %d", &num1, &num2, &num3);   // Convert the input to integers and store them in 'num1', 'num2', 'num3'.
    sum = num1 + num2 + num3;   // Calculate the sum of the three numbers.
    printf("The sum of three numbers : %d\n", sum);   // Print the sum of the three numbers.
    return 0;   // Return 0 to indicate successful execution of the program.
}
