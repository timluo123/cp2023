#include <stdio.h>

int main() {
    char firstname[20], lastname[20];   // Declare character arrays for first name and last name with a maximum size of 20 characters each.
    int bir_year;   // Declare an integer variable 'bir_year' to store the year of birth.

    printf("Input your firstname: ");   // Prompt the user to input their first name.
    if (scanf("%19s", firstname) != 1) {
        fprintf(stderr, "Error: Failed to read firstname.\n");
        return 1;  // Return an error code.
    }

    printf("Input your lastname: ");   // Prompt the user to input their last name.
    if (scanf("%19s", lastname) != 1) {
        fprintf(stderr, "Error: Failed to read lastname.\n");
        return 1;  // Return an error code.
    }

    printf("Input your year of birth: ");   // Prompt the user to input their year of birth.
    if (scanf("%d", &bir_year) != 1) {
        fprintf(stderr, "Error: Failed to read year of birth.\n");
        return 1;  // Return an error code.
    }

    printf("%s %s %d\n", firstname, lastname, bir_year);   // Print the first name, last name, and year of birth.

    return 0;   // Return 0 to indicate successful execution of the program.
}
