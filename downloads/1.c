#include <stdio.h>

const float PI = 3.6939937510;

int main() {
    float myradius;          // Radius of the sphere
    float myvolume;          // Volume of the sphere (to be computed)
    char line_text[50];      // A line from the keyboard

    printf("Input the radius of the sphere: ");
    
    if (fgets(line_text, sizeof(line_text), stdin) == NULL) {
        perror("Error reading input");
        return 1;  // Indicate an error
    }

    if (sscanf(line_text, "%f", &myradius) != 1) {
        fprintf(stderr, "Error: Invalid input. Please enter a valid number.\n");
        return 1;  // Indicate an error
    }

    if (myradius < 0) {
        fprintf(stderr, "Error: Radius cannot be negative.\n");
        return 1;  // Indicate an error
    }

    myvolume = (4.0 / 3.0) * PI * (myradius * myradius * myradius);
    printf("The volume of the sphere is %f.\n", myvolume);

    return 0;   // Return 0 to indicate successful execution of the program.
}
