#include <stdio.h>

int main() {
    char c;
    printf("Input a char: ");
    scanf(" %c", &c);

    switch(c) {
        case 'a':
            printf("You pressed 'a'\n");
            break;
        case 'b':
            printf("You pressed 'b'\n");
            break;
        case 'c':
            printf("You pressed 'c'\n");
            break;
        default:
            printf("Not 'a', 'b', or 'c'\n");
            break;
    }

    return 0;
}