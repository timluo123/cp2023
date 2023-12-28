#include <stdio.h>
#include <ctype.h>
#include <string.h>

int main() {
    char notes[20];  // 增加註解陣列的大小以容納更長的字串。
    char grd;

    printf("請輸入成績：");
    if (scanf(" %c", &grd) != 1) {
        fprintf(stderr, "讀取成績時發生錯誤。\n");
        return 1;  // 返回非零以表示錯誤。
    }

    grd = toupper(grd);

    switch (grd) {
        case 'E':
            strncpy(notes, "優秀", sizeof(notes));
            break;
        case 'V':
            strncpy(notes, "很好", sizeof(notes));
            break;
        case 'G':
            strncpy(notes, "好", sizeof(notes));
            break;
        case 'A':
            strncpy(notes, "普通", sizeof(notes));
            break;
        case 'F':
            strncpy(notes, "不及格", sizeof(notes));
            break;
        default:
            strncpy(notes, "無效的成績\n", sizeof(notes));
            break;
    }

    printf("您選擇了：%s\n", notes);

    return 0;
}
