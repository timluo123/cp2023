#include <stdio.h>

int main() {
    float rec_width;      /* Variable to store the width of the rectangle */
    float rec_height;     /* Variable to store the height of the rectangle */
    float rec_perimeter;  /* Variable to store the perimeter (to be computed) */

    // Prompt the user to input the height of the rectangle.
    printf("Input the height of the Rectangle : ");

    // Check the return value of scanf to ensure a valid float is entered.
    if (scanf("%f", &rec_height) != 1 || rec_height <= 0) {
        fprintf(stderr, "Error: Invalid input for height. Please enter a positive number.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    // Prompt the user to input the width of the rectangle.
    printf("Input the width of the Rectangle : ");

    // Check the return value of scanf to ensure a valid float is entered.
    if (scanf("%f", &rec_width) != 1 || rec_width <= 0) {
        fprintf(stderr, "Error: Invalid input for width. Please enter a positive number.\n");
        return 1;  // Return non-zero to indicate an error.
    }

    // Calculate the perimeter of the rectangle using the formula: perimeter = 2 * ( width + height )
    rec_perimeter = 2.0 * (rec_height + rec_width);

    // Print the calculated perimeter of the rectangle.
    printf("Perimeter of the Rectangle is : %f\n", rec_perimeter);

    return 0;  // Indicate successful program execution.
}
