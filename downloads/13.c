#include <stdio.h>

int main() {
    int ang1, ang2, ang3; // three angles of a triangle

    // Read two angles of the triangle from the user separated by a comma
    printf("Input two angles of a triangle separated by a comma: ");
    
    // Check the return value of scanf to handle input errors
    if (scanf("%d, %d", &ang1, &ang2) != 2) {
        fprintf(stderr, "Error reading input. Please provide two integers separated by a comma.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    ang3 = 180 - (ang1 + ang2); // Calculate the third angle

    printf("Third angle of the triangle: %d\n", ang3);

    return 0;
}
