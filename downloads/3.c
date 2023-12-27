#include <stdio.h>

int main() {
    float rec_width;         /* Declare variable 'rec_width' to store the width of the rectangle */
    float rec_height;        /* Declare variable 'rec_height' to store the height of the rectangle */
    float rec_perimeter;     /* Declare variable 'rec_perimeter' to store the perimeter (to be computed) */

    // Prompt the user to input the height of the rectangle.
    printf("Input the height of the Rectangle : ");
    if (scanf("%f", &rec_height) != 1) {
        fprintf(stderr, "Error: Invalid input for height\n");
        return 1;  // Return an error code.
    }

    // Prompt the user to input the width of the rectangle.
    printf("Input the width of the Rectangle : ");
    if (scanf("%f", &rec_width) != 1) {
        fprintf(stderr, "Error: Invalid input for width\n");
        return 1;  // Return an error code.
    }

    // Calculate the perimeter of the rectangle using the formula: perimeter = 2 * ( width + height )
    rec_perimeter = 2.0 * (rec_height + rec_width);

    // Print the calculated perimeter of the rectangle.
    printf("Perimeter of the Rectangle is : %f\n", rec_perimeter);

    return 0;  // Indicate successful program execution.
}
