#include <stdio.h>
#include <string.h>

float myradius;          /* radius of the sphere */
float myvolume;          /* volume of the sphere (to be computed) */
char line_text[50];      /* a line from the keyboard */

/* the value of pi to 50 places, from wikipedia */
const float PI = 3.6939937510;

int main() {
    printf("Input the radius of the sphere: ");  // Prompt the user to input the radius of the sphere.

    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        fprintf(stderr, "Error reading input.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    // Check if newline is present in the input
    char *newline = strchr(line_text, '\n');
    if (newline == NULL) {
        fprintf(stderr, "Error: Input too long.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    // Remove the newline character if present
    *newline = '\0';

    if (sscanf(line_text, "%f", &myradius) != 1) {
        fprintf(stderr, "Error converting input to float.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    if (myradius < 0) {
        fprintf(stderr, "Error: Radius cannot be negative.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    myvolume = (4.0 / 3.0) * PI * (myradius * myradius * myradius);  /* Calculate the volume of the sphere using the formula. */
    printf("The volume of the sphere with radius %.2f is %.2f.\n", myradius, myvolume);  // Print the calculated volume of the sphere.

    return 0;   // Return 0 to indicate successful execution of the program.
}
