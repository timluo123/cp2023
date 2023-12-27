#include <stdio.h>

int main() {
    int num1, num2;   // Declare two integer variables 'num1' and 'num2'.
    int sum, sub, mult, mod;   // Declare variables to store the results of arithmetic operations.
    float div;   // Declare a float variable 'div' to store the result of division.

    /* 
     * Read two numbers from the user separated by a comma 
     */  
    printf("Input any two numbers separated by a comma: ");   // Prompt the user to input two numbers separated by a comma.

    // Check the return value of scanf
    if (scanf("%d , %d", &num1, &num2) != 2) {
        printf("Invalid input. Please enter two numbers.\n");
        return 1;  // Return 1 to indicate an error.
    }

    /* 
     * Perform all arithmetic operations 
     */   
    sum = num1 + num2;   // Calculate the sum of 'num1' and 'num2'.
    sub = num1 - num2;   // Calculate the difference between 'num1' and 'num2'.
    mult = num1 * num2;  // Calculate the product of 'num1' and 'num2'.
    div = (float)num1 / num2;   // Calculate the division of 'num1' by 'num2' and cast the result to a float.
    mod = num1 % num2;   // Calculate the modulus of 'num1' and 'num2'.

    /* 
     * Print the result of all arithmetic operations 
     */  
    printf("The sum of the given numbers: %d\n", sum);   // Print the sum.
    printf("The difference of the given numbers: %d\n", sub);   // Print the difference.
    printf("The product of the given numbers: %d\n", mult);   // Print the product.
    printf("The quotient of the given numbers: %f\n", div);   // Print the quotient.
    printf("MODULUS: %d\n", mod);   // Print the modulus.

    return 0;   // Return 0 to indicate successful execution of the program.   
}
