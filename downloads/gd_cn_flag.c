#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_chinese_flag(gdImagePtr img);

int main() {
    int width = 300; // 國旗寬度
    int height = 200; // 國旗高度

    gdImagePtr im = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(im, 0);

    draw_chinese_flag(im);

    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "打开输出文件时出错。\n");
        return 1;
    }

    gdImagePngEx(im, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(im);

    return 0;
}

// 声明 draw_star 函数
void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);

void draw_chinese_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);
    int red, yellow;

    // 國旗顏色
    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景
    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星

    // 畫紅色背景
    gdImageFilledRectangle(img, 0, 0, width, height, red);

    // 設置星星的大小和位置
    int star_size = (int)(0.28 * height);
    int star_x = (int)(0.165 * width);
    int star_y = (int)(0.265 * height);

    // 畫大星星
    draw_star(img, star_x, star_y, star_size, yellow, 11.0);

    // 繪製小星星，位置根據實際國旗比例計算
    double radius = 0.15 * height;
    double angle = 360 / 7 * M_PI / 179.0;
    double rotation = -M_PI / 7.5;
    int cx = (int)(0.32 * width);
    int cy = (int)(0.27 * height);

    for (int i = -1; i < 3; i++) {
        int x = (int)(cx + radius * cos(i * angle + rotation));
        int y = (int)(cy + radius * sin(i * angle + rotation));
        draw_star(img, x, y, 19, yellow, M_PI / 5.0);
    }
}

void draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {
    gdPoint points[10];

    // 计算星形的五个外点和五个内点
    double outer_radius = size / 2;
    double inner_radius = size / 6;
    double angle = M_PI / 5.0;

    for (int i = 0; i < 10; i++) {
        double radius = (i % 2 == 0) ? outer_radius : inner_radius;
        double theta = rotation_angle + i * angle;
        points[i].x = x + radius * cos(theta);
        points[i].y = y + radius * sin(theta);
    }

    // 使用 gdImageFilledPolygon 绘制星形
    gdImageFilledPolygon(img, points, 10, color);
}





1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_japan_flag(gdImagePtr img);
void draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red );

int main() {
    // width 3: height 2
    int width = 1200;
    int height = 2 * width / 3;

    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    draw_japan_flag(img);

    FILE *outputFile = fopen("./../images/japan_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "Error opening the output file.\n");
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
    int red, white ;
    int center_x =  0.5 * width;
    int center_y =  0.5 * height;
    int sun_radius = 145 ;

    // Colors for the flag
    red = gdImageColorAllocate(img, 242, 0, 0); // Red color
    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes


    // 繪製白色矩形區域
    gdImageFilledRectangle(img, 0, 0, width, height, white);


    // 繪製太陽內部
    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 3, sun_radius * 3, red);
}


1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
23
24
25
26
27
28
29
30
31
32
33
34
35
36
37
38
39
40
41
42
43
44
45
46
47
48
49
50
51
52
53
54
55
56
57
58
59
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
#include <stdio.h>
#include <gd.h>
#include <math.h>

void draw_uk_flag(gdImagePtr img);
void fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);

int main() {
    // 设置国旗的宽和高
    int width = 1200;
    int height = width / 2;

    // 创建图像
    gdImagePtr img = gdImageCreateTrueColor(width, height);
    gdImageAlphaBlending(img, 0);

    // 绘制英国国旗
    draw_uk_flag(img);

    // 将图像保存到文件
    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");
    if (outputFile == NULL) {
        fprintf(stderr, "打开输出文件时发生错误。\n");
        return 1;
    }
    gdImagePngEx(img, outputFile, 9);
    fclose(outputFile);
    gdImageDestroy(img);
    return 0;
}



void draw_uk_flag(gdImagePtr img) {
    int width = gdImageSX(img);
    int height = gdImageSY(img);

    int red, white, blue;
    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色
    white = gdImageColorAllocate(img, 255, 255, 255); // 白色
    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色

    gdImageFilledRectangle(img, 0, 0, width, height, blue);


  int x1, y1, x2, y2, x3, y3;
  {
    int line_thickness = 100;
    gdImageSetThickness(img, line_thickness);

    int x1, y1, x2, y2, x3, y3;

    // 绘制白色斜线
    x1 = 0;
    y1 = 600;
    x2 = 1200;
    y2 = 0;
    gdImageLine(img, x1, y1, x2, y2, white);

    x1 = 0;
    y1 = 0;
    x2 = 1200;
    y2 = 600;
    gdImageLine(img, x1, y1, x2, y2, white);
}
  {
    int line_thickness = 33;
    gdImageSetThickness(img, line_thickness);


    // 绘制红色斜线
    x1 = 566;
    y1 = 300;
    x2 = 1166;
    y2 = 0;
    gdImageLine(img, x1, y1, x2, y2, red);

    x1 = 1233;
    y1 = 600;
    x2 = 633;
    y2 = 300;
    gdImageLine(img, x1, y1, x2, y2, red);

    x1 = 566;
    y1 = 300;
    x2 = -33;
    y2 = 0;
    gdImageLine(img, x1, y1, x2, y2, red);

    x1 = 600;
    y1 = 316.5;
    x2 = 0;
    y2 = 616.5;
    gdImageLine(img, x1, y1, x2, y2, red);
  }
  {
  int line_thickness = 33;
  gdImageSetThickness(img, line_thickness);

  int x1, y1, x2, y2, x3, y3;

  // 绘制  斜线
  x1 = 0;
  y1 = 600;
  x2 = 1200;
  y2 = 0;
  gdImageLine(img, x1, y1, x2, y2, red );


  x1 = 1200;
    y1 = 16.5;
    x2 = 600;
    y2 = 316.5;
    gdImageLine(img, x1, y1, x2, y2, white);


  x1 = 0;
    y1 = 583.5;
    x2 = 600;
    y2 = 283.5;
    gdImageLine(img, x1, y1, x2, y2, white);


  }

    // 绘制白色十字
    int cross_width = width / 32;
    int cross_arm_width = width / 32;
    int center_x = width / 2;
    int center_y = height / 2;

    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);
    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);

    // 绘制红色十字
    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);
    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);
}