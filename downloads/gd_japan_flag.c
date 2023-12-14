#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_japan_flag(gdImagePtr img);
void draw_red_circle(gdImagePtr img, int center_x, int center_y, int circle_radius, int red);

int main() {
    // 日本國旗的寬高比為2:3
    int width = 1200;
    int height = (int)(width * 2.0 / 3.0);

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_japan_flag(img);

  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");
  if (outputFile == NULL) {
      fprintf(stderr, "打开输出文件时出错。\n");
      return 1;
  }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}

void draw_japan_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red;
    int center_x = (int)(width / 2);
    int center_y = (int)(height / 2);
    int circle_radius = (int)(width / 5); // 取旗面寬度的1/5為圓的半徑

    // 顏色
    red = gdImageColorAllocate(img, 186, 12, 47); // 日本國旗的紅色

    // 繪製白色矩形背景
    gdImageFilledRectangle(img, 0, 0, width, height, gdImageColorAllocate(img, 255, 255, 255));

    // 繪製紅色圓圈
    draw_red_circle(img, center_x, center_y, circle_radius, red);
}

void draw_red_circle(gdImagePtr img, int center_x, int center_y, int circle_radius, int red) {
    // 繪製紅色圓圈
    gdImageFilledEllipse(img, center_x, center_y, circle_radius * 2, circle_radius * 2, red);
}