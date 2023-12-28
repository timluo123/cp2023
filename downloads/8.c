#include <stdio.h> // Include the standard input/output header file.

int main() {
    int num, i, ctr, stno, enno; // Declare variables for the number, loop counters, and range.

    // Prompt the user to input the starting number of the range.
    printf("Input starting number of range: ");
    if (scanf("%d", &stno) != 1) {
        printf("Error: Invalid input for starting number.\n");
        return 1; // Return a non-zero value to indicate an error.
    }

    // Prompt the user to input the ending number of the range.
    printf("Input ending number of range : ");
    if (scanf("%d", &enno) != 1) {
        printf("Error: Invalid input for ending number.\n");
        return 1; // Return a non-zero value to indicate an error.
    }

    // Print the message indicating the range.
    printf("The prime numbers between %d and %d are: \n", stno, enno);

    for (num = stno; num <= enno; num++) { // Loop through the numbers in the specified range.
        ctr = 0; // Initialize the counter.

        for (i = 2; i <= num / 2; i++) { // Loop through possible divisors.
            if (num % i == 0) { // If a divisor is found...
                ctr++; // ...increment the counter.
                break; // Exit the loop.
            }
        }

        if (ctr == 0 && num != 1) // If no divisors were found and the number is not 1...
            printf("%d ", num); // ...print the prime number.
    }

    printf("\n"); // Move to the next line after printing all prime numbers.

    return 0; // Return 0 to indicate successful execution.
}
