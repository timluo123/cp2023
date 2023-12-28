#include <stdio.h>

int main() {
    char firstname[20], lastname[20];
    int bir_year;

    printf("Input your firstname: ");

    // Check the return value of scanf to handle input errors
    if (scanf("%19s", firstname) != 1) {
        fprintf(stderr, "Error reading firstname.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    printf("Input your lastname: ");
    if (scanf("%19s", lastname) != 1) {
        fprintf(stderr, "Error reading lastname.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    printf("Input your year of birth: ");
    if (scanf("%d", &bir_year) != 1) {
        fprintf(stderr, "Error reading year of birth.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    printf("%s %s %d\n", firstname, lastname, bir_year);

    return 0;
}
