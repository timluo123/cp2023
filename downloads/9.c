#include <stdio.h>

int main() {
    int i, n, sum = 0;

    printf("Input the number of terms : ");

    // Check the return value of scanf
    if (scanf("%d", &n) != 1) {
        fprintf(stderr, "Error: Please enter a valid number.\n");
        return 1; // Return a non-zero value to indicate an error
    }

    printf("\nThe square natural numbers up to %d terms are :", n);

    for (i = 1; i <= n; i++) {
        printf("%d  ", i * i);
        sum += i * i;
    }

    printf("\nThe Sum of Square Natural Numbers up to %d terms = %d \n", n, sum);

    return 0;
}
