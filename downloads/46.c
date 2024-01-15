#include <stdio.h>

int main() {
    char c;
    printf("Input a char: ");
    scanf(" %c", &c); // 加入一個空格在 %c 前，以排除之前的輸入緩衝區中的換行符號

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