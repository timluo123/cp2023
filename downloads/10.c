#include <stdio.h>

int main()  
{  
    int ang1, ang2, ang3; /* Three angles of a triangle */

    /* Read two angles of the triangle from the user separated by a comma */  
    printf("Input two angles of the triangle separated by a comma: ");  

    // Check the return value of scanf
    if (scanf("%d, %d", &ang1, &ang2) != 2) {
        // If the expected number of inputs is not read, print an error message
        printf("Error: Invalid input format.\n");
        return 1; // Return a non-zero value to indicate an error
    }

    ang3 = 180 - (ang1 + ang2);  /* Calculate the third angle */

    printf("Third angle of the triangle: %d\n", ang3);  

    return 0;  
}
