
#include <stdio.h>  // Include standard input/output library
#include <stdlib.h> // Include standard library for additional functions

// Declare the function 'test' with two integer parameters
int test(int x, int y);

int main(void)
{
    // Call the function 'test' with arguments 78 and 95, and print the result
    printf("%d", test(78, 95));

    // Print a newline for formatting
    printf("\n");

    // Call the function 'test' with arguments 95 and 95, and print the result
    printf("%d", 測試(95, 95));

    // 列印換行符號以進行格式化
    printf("\n");

    // 使用參數 99 和 70 呼叫函數“test”，並列印結果
    printf("%d", 測試(99, 70));
}

// 'test' 的函數定義
int 測試（int x，int y）
{
    整數 n = 100；// 定義變數 'n' 並為其賦值 100
    int val = abs(x - n); // 計算 'x' 和 'n' 之間的絕對差並將其儲存在 'val' 中
    int val2 = abs(y - n); // 計算 'y' 和 'n' 之間的絕對差並將其儲存在 'val2' 中

    // 檢查「val」是否等於「val2」。如果為 true，則傳回 0。否則，如果 'val' 小於 'val2'，則傳回 'x'，否則傳回 'y'。
    返回 val == val2 ？0 : (val < val2 ? x : y);
}
