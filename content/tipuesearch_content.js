var tipuesearch = {"pages": [{'title': '關於', 'text': 'https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': '關於.html'}, {'title': 'w15', 'text': '(1) \n 根據 roc_list_coord_flag.7z 方案內容所印出的六組ABED等相關中華民國國旗白日圖案中的菱形四個關鍵點，請直接在青天與滿地紅的圖案中，利用白色作為畫線顏色，將第一個兩個一組ABED等四點的座標，以直線相連。 \n #include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n \n無效draw_roc_flag（gdImagePtr img）； \nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color); \n \nint main() { \n    //寬度3:高度2 \n    整數寬度=1200； \n    // 國旗長寬比為3:2 \n    int 高度 = (int)(寬度 * 2.0 / 3.0); \n \n    gdImagePtr img = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(img, 0); \n \n    鄰近_roc_flag（img）； \n \n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb"); \n    如果（輸出檔== NULL）{ \n        fprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n        返回1； \n    } \n    gdImagePngEx(img, 輸出檔, 9); \n    fclose(輸出檔); \n    gdImageDestroy(img); \n    返回0； \n} \n \n無效draw_roc_flag（gdImagePtr img）{ \n    int 寬度 = gdImageSX(img); \n    int 高度 = gdImageSY(img); \n    int 紅、白、藍； \n \n    //白色日位於青天面積正中央，因此中心點座標為長寬各1/4處 \n    int center_x = (int)(寬度/4); \n    int center_y = (int)(高度 / 4); \n \n    int sun_radius = (int)(寬度/8); \n    int White_circle_dia = sun_radius; \n    int 藍色圓形直徑 = 白色圓形直徑 + 白色圓形直徑 * 2 / 15; \n \n    紅色 = gdImageColorAllocate(img, 255, 0, 0);  // 紅色 \n    白色 = gdImageColorAllocate(img, 255, 255, 255);  // 白色 \n    藍色 = gdImageColorAllocate(img, 0, 0, 149);  // 藍色 \n \n    gdImageFilledRectangle(img, 0, 0, 寬度, 高度, 紅色); \n    gdImageFilledRectangle(img, 0, 0, (int)(寬度 / 2.0), (int)(高度 / 2.0), 藍色); \n    draw_white_sun(img, center_x, center_y, sun_radius, 白色); \n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, 藍色); \n    gdImageFilledEllipse（img，center_x，center_y，white_circle_dia，white_circle_dia，白色）； \n \n    // 在青天與滿地紅的圖案中以白色畫線彩虹連接菱形的四個關鍵點 \n    gdImageSetThickness(img, 10);  //設定線條粗度為10 \n    gdImageLine(img, 429, 125, 279, 165, 白色); \n    gdImageLine(img, 279, 165, 170, 274, 白色); \n    gdImageLine(img, 170, 274, 170, 274, 白色); \n    gdImageLine(img, 429, 125, 170, 274, 白色);  // 第四條加入條連線 \n} \nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color) { \n    // 實作draw_white_sun函數的內容 \n    // 可以在此處比較白日的內部模式 \n} \n \n \n \n \xa0 \n (2) \n 承上題，請列出第二組ABED的四條直線與白日中的大圓所相交（相交）的四個點座標。 \n #include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n \n無效draw_roc_flag（gdImagePtr img）； \nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color); \n \nint main() { \n    // 寬度 3: 高度 2 \n    整數寬度=1200； \n    // 國旗長寬比為3:2 \n    int 高度 = (int)(寬度*2.0 / 3.0); \n \n    gdImagePtr img = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(img, 0); \n \n    繪製_roc_flag（img）； \n \n    FILE *outputFile = fopen("roc_flag_in_gd.png", "wb"); \n    如果（輸出檔== NULL）{ \n        fprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n        返回1； \n    } \n    gdImagePngEx(img, 輸出檔, 9); \n    fclose(輸出檔); \n    gdImageDestroy(img); \n    返回0； \n} \nvoid draw_roc_flag(gdImagePtr img) {  \n    int width = gdImageSX(img);  \n    int height = gdImageSY(img);  \n    int red, white, blue;  \n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處  \n    int center_x = (int)(width/4);  \n    int center_y = (int)(height/4);  \n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖  \n    // 由於中央白日圓形的半徑為青天寬度的 1/8  \n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8  \n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8  \n    int sun_radius = (int)(width/8);  \n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑  \n    int white_circle_dia = sun_radius;  \n    // 中央藍色圓形半徑為中央白日的 1又 2/15  \n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;  \n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值  \n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色  \n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色  \n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色  \n    // 根據畫布大小塗上紅色長方形區域  \n    gdImageFilledRectangle(img, 0, 0, width, height, red);  \n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色  \n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);  \n  {int x1 = 429;  \n   int y1 = 125;  \n   int x2 = 279;  \n   int y2 = 165;  \n   gdImageSetThickness(img, 10); // 設置線條寬度為10 \n   gdImageLine(img, x1, y1, x2, y2, white); // 畫線 \n   // 畫一條線連接兩個點  \n   gdImageLine(img, x1, y1, x2, y2, white);  \n  }  \n  {int x1 = 170;  \n     int y1 = 274;  \n     int x2 = 279;  \n     int y2 = 165;  \n \n     // 畫一條線連接兩個點  \n     gdImageLine(img, x1, y1, x2, y2, white);  \n  }  \n  {  \n    int x1 = 170;  \n     int y1 = 274;  \n     int x2 = 429;  \n     int y2 = 125;  \n \n     // 畫一條線連接兩個點  \n     gdImageLine(img, x1, y1, x2, y2, white);  \n  }  \n  // 利用一個藍色大圓與白色小圓畫出藍色環狀  \n  gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);  \n  gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);  \n \n \n  // 定義座標結構  \n  typedef struct {  \n      double x;  \n      double y;  \n  } Point;  \n \n  // 計算圓與線的交點  \n  void circleLineIntersection(double h, double k, double r, double x1, double y1, double x2, double y2) {  \n      // 直線斜率  \n      double m = (y2 - y1) / (x2 - x1);  \n \n      // 直線方程式中的常數項  \n      double b = y1 - m * x1;  \n \n      // 圓與直線交點的計算  \n      double A = 1 + pow(m, 2);  \n      double B = 2 * (m * b - m * k - h);  \n      double C = pow(k, 2) - pow(r, 2) + pow(h, 2) - 2 * b * k + pow(b, 2);  \n \n      // 判斷交點個數  \n    double discriminant = pow(B, 2) - 4 * A * C;  \n    if (discriminant > 0) {  \n        double x_intersect1 = (-B + sqrt(discriminant)) / (2 * A);  \n        double y_intersect1 = m * x_intersect1 + b;  \n        printf("交點: (%.2f, %.2f)\\n", x_intersect1, y_intersect1);  \n \n        double x_intersect2 = (-B - sqrt(discriminant)) / (2 * A);  \n        double y_intersect2 = m * x_intersect2 + b;  \n        printf("交點: (%.2f, %.2f)\\n", x_intersect2, y_intersect2);  \n    } else if (discriminant == 0) {  \n        double x_intersect = -B / (2 * A);  \n        double y_intersect = m * x_intersect + b;  \n        printf("交點: (%.2f, %.2f)\\n", x_intersect, y_intersect);  \n    } else {  \n        printf("No points.\\n");  \n    }  \n \n  }  \n      // 圓的參數  \n      雙circle_x = (int)(寬度/4);  // 圓心 x 座標 \n      雙圓_y = (int)(高度/4);  // 圓心 y 座標 \n      雙半徑 = 白色圓直徑 + 白色圓直徑*2/15； // 圓半徑 \n      // 兩點座標 \n  雙 x3 = 170； \n  雙 y3 = 274； \n  雙倍 x4 = 279； \n  雙 y4 = 165； \n \n  圓線交集（圓x，圓y，半徑，x4，y4，x3，y3）； \n \n  雙 x5 = 279； \n  雙 y5 = 165； \n  雙 x6 = 429； \n  雙 y6 = 125； \n \n  圓線交集（圓x，圓y，半徑，x6，y6，x5，y5）； \n  } \n \n', 'tags': '', 'url': 'w15.html'}, {'title': 'w14', 'text': '\n', 'tags': '', 'url': 'w14.html'}, {'title': 'w13', 'text': '// 包含標準輸出進入程式庫的標頭檔案 \n#include <stdio.h>  \n  \n// 主函數式 \nint main() {  \n    // 開啟一個檔案讀取地震和速度資料 \n    FILE *outputFile = fopen("motion_data.txt 」、「w」）； \n    if (!outputFile) {  \n        fprintf(stderr, "建立資料失敗檔。\\n"); \n        返回1； \n    }  \n  \n    // 模擬運動10秒併計算地質與速度，同時將資料寫入文件 \n    double x = 0.2;  // 初始隧道 \n    double v = 0.0;  // 初速 \n    double dt = 0.01;  // 時間步 \n    長 double t = 0.0;  // 時間 \n  \n    while (t <= 10.0) { \n        雙高度 = (-10.0 * x - 0.5 * v) / 1.0;  // 這裡修改系統參數 \n        v += 高度 * dt;  \n        x+=v*dt； \n  \n        fprintf(outputFile, "%lf %lf %lf\\n", t, x, v);  \n  \n        t += dt； \n    }  \n  \n    // 關閉資料檔 \n    fclose(outputFile);  \n  \n    // 使用 popen 啟動 Gnuplot 程式 \n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");  \n    if (!gnuplotPipe) {  \n        fprintf(stderr, "啟動Gnuplot失敗。\\n"); \n        回傳1;  \n    }  \n  \n    // 使用Gnuplot繪圖指令，指定字體並輸出為PNG  \n    fprintf(gnuplotPipe, "setterminal pngcairo Innovative font \'default,10\' size 800,400\\n");  \n    fprintf( gnuplotPipe, "設定輸出\'./../images/motion_plot.png\'\\n");  \n    fprintf(gnuplotPipe, "設定標題\'與速度與時間\'\\n");  \n    fprintf(gnuplotPipe, "設定xlabel \'時間(s)\'\\n");  \n    fprintf(gnuplotPipe, "設定 ylabel \'地質(m)\'\\n");  \n    fprintf(gnuplotPipe, "使用1:2 行lw 2 標題\'地質\' 重要性\'motion_data .txt\', \\  \n                             \'motion_data.txt\' 使用 1:3 行 lw 2 標題 \'速度\'\\n");  \n  \n    // 關閉 Gnuplot 程式 \n    fprintf(gnuplotPipe, "exit\\n");  \n    pclose(gnuplotPipe); \n  \n    回傳0;  \n} \n \n 明確 \n \n cd 下載 cc  euler_gnuplot_msd_ex1.c  -lgd -lm  ./a.out \n', 'tags': '', 'url': 'w13.html'}, {'title': 'w12', 'text': '\t#include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n  \nint main() { \n    整數寬度=800； \n    整數高度=600； \n  \n    gdImagePtr img = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(img, 0); \n  \n    FILE *outputFile = fopen("hellogd.png", "wb"); \n    如果（輸出檔== NULL）{ \n  \nfprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n  \n返回1； \n    } \n     \n    int 紅色 = gdImageColorAllocate(img, 255, 0, 0); \n    int 藍色 = gdImageColorAllocate(img, 0, 0, 255); \n    int black = gdImageColorAllocate(img, 0, 0, 0); \n    int 白色 = gdImageColorAllocate(img, 255, 255, 255); \n    // 長方形著色 \n    gdImageFilledRectangle(img, 0, 0, 寬度, 高度, 白色); \n    gdImageFilledRectangle(img, 0, 0, (int)width/4, (int)height/4, blue); \n    // 橢圓形塗色 \n    gdImageFilledEllipse(img, (int)width*3/4, (int)height/4, (int)width/4, (int)width/4, red); \n    // 橢圓形畫線 \n    gdImageEllipse(img, (int)width*3/4, (int)height*3/4, (int)width/4, (int)width/4, red); \n    // 畫直線 \n    gdImageLine(img, (int)width/2, (int)height/2, (int)width/2, (int)height/2 + 100, blue); \n     \n    // 多邊形畫線 \n    gdPoint points[4]; \n    points[0].x = (int)width/4; \n    points[0].y = (int)height*3/4; \n    points[1].x = points[0].x + 100; \n    points[1].y = points[0].y; \n    points[2].x = points[1].x; \n    points[2].y = points[1].y + 100; \n    points[3].x = points[2].x - 100; \n    points[3].y = points[2].y; \n    gdImagePolygon(img, points, 4, black); \n     \n    // 多邊形塗色 \n    gdPoint points2[4]; \n    points2[0].x = (int)width/3; \n    points2[0].y = (int)height/2; \n    points2[1].x = points2[0].x + 100; \n    points2[1].y = points2[0].y; \n    points2[2].x = points2[1].x; \n    points2[2].y = points2[1].y + 100; \n    points2[3].x = points2[2].x - 150; \n    points2[3].y = points2[2].y; \n    gdImageFilledPolygon(img, points2, 4, red); \n  \n    gdImagePngEx(img, outputFile, 9); \n    fclose(outputFile); \n    gdImageDestroy(img); \n    return 0; \n} \n \n \n \n \n clear \n \n cd downloads \n cc hello.c -lgd -lm \n ./a.out \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w7', 'text': '', 'tags': '', 'url': 'w7.html'}, {'title': '韓國', 'text': '#include <stdio.h> \n#include <gd.h> \n#include <math.h> \n  \n#define WIDTH 900 \n#define HEIGHT 600 \n#define FILENAME "south_korea_flag.png" \n  \nint main() { \n    gdImagePtr im; \n    FILE *pngout; \n    int white, black, red, blue; \n  \n    im = gdImageCreate(WIDTH, HEIGHT); \n  \n    white = gdImageColorAllocate(im, 255, 255, 255); \n    black = gdImageColorAllocate(im, 0, 0, 0); \n    red = gdImageColorAllocate(im, 205, 0, 0); \n    blue = gdImageColorAllocate(im, 0, 56, 168); \n  \n    // Background (white) \n    gdImageFilledRectangle(im, 0, 0, WIDTH, HEIGHT , white); \n  \n    // Blue Circle (Yin-Yang Symbol) \n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 210, 30, red, gdArc); \n  \n    // Red Circle (Yin-Yang Symbol) \n    gdImageFilledArc(im, WIDTH / 2, HEIGHT / 2, WIDTH / 3, HEIGHT / 2, 30, 210, blue, gdArc); \n  \n  int circleX = 385;    // 圓心的 X 座標 \n  int circleY = 262.5;   // 圓心的 Y 座標 \n  int circleRadius = 75;      \n  \n  // 繪製圓形 \n  gdImageFilledEllipse(im, circleX, circleY, circleRadius * 2, circleRadius * 2, red); \n  \n  int circleX2 = 515;    // 圓心的 X 座標 \n    \n int circleY2 = 337.5; \n  \n  // 繪製圓形 \n  gdImageFilledEllipse(im, circleX2, circleY2, circleRadius * 2, circleRadius * 2, blue); \n    \n  { \n      \n    \n  // 起點和終點位置 \n    \n  int startX = 340;     \n  // 線的起點 X 座標 \n    \n  int startY = 90;    \n  // 線的起點 Y 座標 \n    \n  int endX = 200;      \n  // 線的終點 X 座標 \n    \n  int endY = 260;      \n  // 線的終點 Y 座標 \n   \n  int lineWidth = 23;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX, startY, endX, endY, black); \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -35, startY -10, endX -35, endY -10, black); \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -70, startY -20, endX -70, endY -20, black); \n  \n  int startX2 = 213;     \n  // 線的起點 X 座標 \n  \n  int startY2 = 270;    \n  // 線的起點 Y 座標 \n  \n  int endX2 = 133;      \n  // 線的終點 X 座標 \n  \n  int endY2 = 210;      \n  // 線的終點 Y 座標 \n  \n  int lineWidth2 = 25;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX2 +3, startY2, endX2 +3, endY2, white); \n  \n  gdImageSetThickness(im, lineWidth +10); \ngdImageLine(im, startX2 -17, startY2 +9 , endX2 -17, endY2 +9 , white); \n  \n  gdImageSetThickness(im, lineWidth ); \ngdImageLine(im, startX2 +115, startY2 -145, endX2 +115, endY2 -145, white); \n  \n  gdImageSetThickness(im, lineWidth); \ngdImageLine(im, startX2 +120, startY2 -155, endX2 +120, endY2 -155, white); \n  \n  gdImageSetThickness(im, lineWidth +12); \ngdImageLine(im, startX2 +145, startY2 -155, endX2 +145, endY2 -155, white); \n} \n  { \n    // 起點和終點位置 \n    \n  int startX = 330;     \n  // 線的起點 X 座標 \n    \n  int startY = 520;    \n  // 線的起點 Y 座標 \n    \n  int endX = 190;      \n  // 線的終點 X 座標 \n    \n  int endY = 350;      \n  // 線的終點 Y 座標 \n   \n  int lineWidth = 23;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX, startY, endX, endY, black); \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black); \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black); \n  \n  int startX2 = 213;     \n  // 線的起點 X 座標 \n  \n  int startY2 = 330;    \n  // 線的起點 Y 座標 \n  \n  int endX2 = 133;      \n  // 線的終點 X 座標 \n  \n  int endY2 = 390;      \n  // 線的終點 Y 座標 \n  \n  int lineWidth2 = 25;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth +8); \n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white); \n  \n  gdImageSetThickness(im, lineWidth +10); \ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white); \n  \n  gdImageSetThickness(im, lineWidth ); \ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white); \n  \n  gdImageSetThickness(im, lineWidth); \ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white); \n  \n  gdImageSetThickness(im, lineWidth +14); \ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white); \n  \n    gdImageSetThickness(im, lineWidth -10); \ngdImageLine(im, 232, 426, 206, 448, white); \n  \n  } \n  \n  { \n    // 起點和終點位置 \n    \n  int startX = 564;     \n  // 線的起點 X 座標 \n    \n  int startY = 520;    \n  // 線的起點 Y 座標 \n    \n  int endX = 704;      \n  // 線的終點 X 座標 \n    \n  int endY = 350;      \n  // 線的終點 Y 座標 \n   \n  int lineWidth = 23;  // 線的寬度 \n      \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX +70, startY +20, endX +70, endY +20, black); \n  \n    // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX, startY, endX, endY, black); \n  \n    // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX +35, startY +10, endX +35, endY +10, black); \n      \ngdImageSetThickness(im, lineWidth -10); \ngdImageLine(im, 624, 400, 734, 490, white); \n      \n  int startX2 = 553;     \n  // 線的起點 X 座標 \n  \n  int startY2 = 330;    \n  // 線的起點 Y 座標 \n  \n  int endX2 = 633;      \n  // 線的終點 X 座標 \n  \n  int endY2 = 390;      \n  // 線的終點 Y 座標 \n  \n  int lineWidth2 = 25;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth +8); \n  gdImageLine(im, startX2 +139, startY2, endX2 +139, endY2, white); \n  \n  gdImageSetThickness(im, lineWidth +10); \ngdImageLine(im, startX2 +157, startY2 -9 , endX2 +157, endY2 -9 , white); \n  \n  gdImageSetThickness(im, lineWidth); \ngdImageLine(im, startX2 +25, startY2 +155, endX2 +25, endY2 +155, white); \n  \n  gdImageSetThickness(im, lineWidth +30); \ngdImageLine(im, startX2 -3, startY2 +170, endX2 , endY2 +170, white); \n  } \n  { \n    // 起點和終點位置 \n    \n  int startX = 330;     \n  // 線的起點 X 座標 \n    \n  int startY = 520;    \n  // 線的起點 Y 座標 \n    \n  int endX = 190;      \n  // 線的終點 X 座標 \n    \n  int endY = 350;      \n  // 線的終點 Y 座標 \n   \n  int lineWidth = 23;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX, startY, endX, endY, black); \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -35, startY +10, endX -35, endY +10, black); \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX -70, startY +20, endX -70, endY +20, black); \n  \n  int startX2 = 213;     \n  // 線的起點 X 座標 \n  \n  int startY2 = 330;    \n  // 線的起點 Y 座標 \n  \n  int endX2 = 133;      \n  // 線的終點 X 座標 \n  \n  int endY2 = 390;      \n  // 線的終點 Y 座標 \n  \n  int lineWidth2 = 25;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth +8); \n  gdImageLine(im, startX2 -11, startY2, endX2 -11, endY2, white); \n  \n  gdImageSetThickness(im, lineWidth +10); \ngdImageLine(im, startX2 -30, startY2 -9 , endX2 -30, endY2 -9 , white); \n  \n  gdImageSetThickness(im, lineWidth ); \ngdImageLine(im, startX2 +100, startY2 +150, endX2 +100, endY2 +150, white); \n  \n  gdImageSetThickness(im, lineWidth); \ngdImageLine(im, startX2 +120, startY2 +155, endX2 +120, endY2 +155, white); \n  \n  gdImageSetThickness(im, lineWidth +14); \ngdImageLine(im, startX2 +145, startY2 +157, endX2 +145, endY2 +157, white); \n  \n    gdImageSetThickness(im, lineWidth -10); \ngdImageLine(im, 232, 426, 206, 448, white); \n  \n  } \n  { \n    // 起點和終點位置 \n    \n  int startX = 564;     \n  // 線的起點 X 座標 \n    \n  int startY = 97;    \n  // 線的起點 Y 座標 \n    \n  int endX = 704;      \n  // 線的終點 X 座標 \n    \n  int endY = 267;      \n  // 線的終點 Y 座標 \n   \n  int lineWidth = 23;  // 線的寬度 \n      \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX +70, startY -20, endX +70, endY -20, black); \n  \n    // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX, startY, endX, endY, black); \n  \n    gdImageSetThickness(im, lineWidth -10); \ngdImageLine(im, 624, 212, 734, 118, white); \n      \n    // 繪製線段 \n  gdImageSetThickness(im, lineWidth); \n  gdImageLine(im, startX +35, startY -10, endX +35, endY -10, black); \n      \n  int startX2 = 553;     \n  // 線的起點 X 座標 \n  \n  int startY2 = 277;    \n  // 線的起點 Y 座標 \n  \n  int endX2 = 633;      \n  // 線的終點 X 座標 \n  \n  int endY2 = 217;      \n  // 線的終點 Y 座標 \n  \n  int lineWidth2 = 25;  // 線的寬度 \n  \n  // 繪製線段 \n  gdImageSetThickness(im, lineWidth +8); \n  gdImageLine(im, startX2 +134, startY2, endX2 +134, endY2, white); \n  \n  gdImageSetThickness(im, lineWidth +10); \ngdImageLine(im, startX2 +157, startY2 +9 , endX2 +157, endY2 +9 , white); \n  \n  gdImageSetThickness(im, lineWidth); \ngdImageLine(im, startX2 +25, startY2 -155, endX2 +25, endY2 -155, white); \n  \n    gdImageSetThickness(im, lineWidth +30); \ngdImageLine(im, startX2 -5, startY2 -155, endX2 -5, endY2 -155, white); \n  \n  } \n    \n    // Save image \nFILE *outputFile = fopen("./../images/korea_flag.png", "wb"); \nif (outputFile == NULL) { \n    fprintf(stderr, "Error opening the output file.\\n"); \n    return 1; \n} \n  gdImagePngEx(im, outputFile, 9); \n      fclose(outputFile); \n      gdImageDestroy(im); \n      return 0; \n  } \n \n \n \n clear \n \n cd downloads \n cc gd_korean_flag.c -lgd -lm \n ./a.out \n', 'tags': '', 'url': '韓國.html'}, {'title': '英國', 'text': '#include <stdio.h> \n#include <gd.h> \n#include <math.h> \n \nvoid draw_uk_flag(gdImagePtr img); \nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color); \n \nint main() { \n    // 设置国旗的宽和高 \n    int width = 1200; \n    int height = width / 2; \n \n    // 创建图像 \n    gdImagePtr img = gdImageCreateTrueColor(width, height); \n    gdImageAlphaBlending(img, 0); \n \n    // 绘制英国国旗 \n    draw_uk_flag(img); \n \n    // 将图像保存到文件 \n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb"); \n    if (outputFile == NULL) { \n        fprintf(stderr, "打开输出文件时发生错误。\\n"); \n        return 1; \n    } \n    gdImagePngEx(img, outputFile, 9); \n    fclose(outputFile); \n    gdImageDestroy(img); \n    return 0; \n} \n \n \n \nvoid draw_uk_flag(gdImagePtr img) { \n    int width = gdImageSX(img); \n    int height = gdImageSY(img); \n \n    int red, white, blue; \n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色 \n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色 \n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色 \n \n    gdImageFilledRectangle(img, 0, 0, width, height, blue); \n \n \n  int x1, y1, x2, y2, x3, y3; \n  { \n    int line_thickness = 100; \n    gdImageSetThickness(img, line_thickness); \n \n    int x1, y1, x2, y2, x3, y3; \n \n    // 绘制白色斜线 \n    x1 = 0; \n    y1 = 600; \n    x2 = 1200; \n    y2 = 0; \n    gdImageLine(img, x1, y1, x2, y2, white); \n \n    x1 = 0; \n    y1 = 0; \n    x2 = 1200; \n    y2 = 600; \n    gdImageLine(img, x1, y1, x2, y2, white); \n} \n  { \n    int line_thickness = 33; \n    gdImageSetThickness(img, line_thickness); \n \n \n    // 绘制红色斜线 \n    x1 = 566; \n    y1 = 300; \n    x2 = 1166; \n    y2 = 0; \n    gdImageLine(img, x1, y1, x2, y2, red); \n \n    x1 = 1233; \n    y1 = 600; \n    x2 = 633; \n    y2 = 300; \n    gdImageLine(img, x1, y1, x2, y2, red); \n \n    x1 = 566; \n    y1 = 300; \n    x2 = -33; \n    y2 = 0; \n    gdImageLine(img, x1, y1, x2, y2, red); \n \n    x1 = 600; \n    y1 = 316.5; \n    x2 = 0; \n    y2 = 616.5; \n    gdImageLine(img, x1, y1, x2, y2, red); \n  } \n  { \n  int line_thickness = 33; \n  gdImageSetThickness(img, line_thickness); \n \n  int x1, y1, x2, y2, x3, y3; \n \n  // 绘制  斜线 \n  x1 = 0; \n  y1 = 600; \n  x2 = 1200; \n  y2 = 0; \n  gdImageLine(img, x1, y1, x2, y2, red ); \n \n \n  x1 = 1200; \n    y1 = 16.5; \n    x2 = 600; \n    y2 = 316.5; \n    gdImageLine(img, x1, y1, x2, y2, white); \n \n \n  x1 = 0; \n    y1 = 583.5; \n    x2 = 600; \n    y2 = 283.5; \n    gdImageLine(img, x1, y1, x2, y2, white); \n \n \n  } \n \n    // 绘制白色十字 \n    int cross_width = width / 32; \n    int cross_arm_width = width / 32; \n    int center_x = width / 2; \n    int center_y = height / 2; \n \n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white); \n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white); \n \n    // 绘制红色十字 \n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red); \n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red); \n} \n \n \n 清除 \n cd 下載 cc gd_uk_flag.c -lgd -lm  ./a.out \n \xa0 \n \n', 'tags': '', 'url': '英國.html'}, {'title': '日本', 'text': '#include <stdio.h> \n#include <gd.h> \n#include <math.h> \n \nvoid draw_japan_flag(gdImagePtr img); \nvoid draw_red_circle(gdImagePtr img, int center_x, int center_y, int circle_radius, int red); \n \nint main() { \n    // 日本國旗的寬高比為2:3 \n    int width = 1200; \n    int height = (int)(width * 2.0 / 3.0); \n \n    gdImagePtr img = gdImageCreateTrueColor(width, height); \n    gdImageAlphaBlending(img, 0); \n \n    draw_japan_flag(img); \n \n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb"); \n  if (outputFile == NULL) { \n      fprintf(stderr, "打开输出文件时出错。\\n"); \n      return 1; \n  } \n    gdImagePngEx(img, outputFile, 9); \n    fclose(outputFile); \n    gdImageDestroy(img); \n    return 0; \n} \n \nvoid draw_japan_flag(gdImagePtr img) { \n    int width = gdImageSX(img); \n    int height = gdImageSY(img); \n    int red; \n    int center_x = (int)(width / 2); \n    int center_y = (int)(height / 2); \n    int circle_radius = (int)(width / 5); // 取旗面寬度的1/5為圓的半徑 \n \n    // 顏色 \n    red = gdImageColorAllocate(img, 186, 12, 47); // 日本國旗的紅色 \n \n    // 繪製白色矩形背景 \n    gdImageFilledRectangle(img, 0, 0, width, height, gdImageColorAllocate(img, 255, 255, 255)); \n \n    // 繪製紅色圓圈 \n    draw_red_circle(img, center_x, center_y, circle_radius, red); \n} \n \nvoid draw_red_circle(gdImagePtr img, int center_x, int center_y, int circle_radius, int red) { \n    // 繪製紅色圓圈 \n    gdImageFilledEllipse(img, center_x, center_y, circle_radius * 2, circle_radius * 2, red); \n} \n \n \n \n clear \n cd downloads cc gd_japan_flag.c -lgd -lm ./a.out \n', 'tags': '', 'url': '日本.html'}, {'title': '中國', 'text': '#include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n  \n無效draw_chinese_flag(gdImagePtr img); \n  \nint main() { \n    整數寬度=300； // 國旗寬度 \n    整數高度=200； // 國旗高度 \n  \n    gdImagePtr im = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(im, 0); \n  \n    繪製中文標誌（im）； \n  \n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb"); \n    如果（輸出檔== NULL）{ \n        fprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n        返回1； \n    } \n  \n    gdImagePngEx(im, 輸出檔, 9); \n    fclose(輸出檔); \n    gdImageDestroy(im); \n  \n    返回0； \n} \n  \n//聲明draw_star函數 \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double spin_angle); \n  \n無效draw_chinese_flag（gdImagePtr img）{ \n    int 寬度 = gdImageSX(img); \n    int 高度 = gdImageSY(img); \n    int 紅色、黃色； \n  \n    // 國旗顏色 \n    紅色 = gdImageColorAllocate(img, 255, 0, 0);  // 紅色背景 \n    黃色 = gdImageColorAllocate(img, 255, 255, 0);  // 黃色星星 \n  \n    // 畫紅色背景 \n    gdImageFilledRectangle(img, 0, 0, 寬度, 高度, 紅色); \n  \n    // 設定星星的大小和位置 \n    int star_size = (int)(0.28 * 高度); \n    int star_x = (int)(0.165 * 寬度); \n    int star_y = (int)(0.265 * 高度); \n  \n    //畫大星星 \n    draw_star(img, star_x, star_y, star_size, 黃色, 11.0); \n  \n    // 鄰近小恆星，位置依實際國旗比例計算 \n    雙半徑 = 0.15 * 高度； \n    雙倍角度 = 360 / 7 * M_PI / 179.0； \n    雙旋轉 = -M_PI / 7.5； \n    int cx = (int)(0.32 * 寬度); \n    int cy = (int)(0.27 * 高度); \n  \n    for (int i = -1; i < 3; i++) { \n        int x = (int)(cx + 半徑 * cos(i * 角度 + 旋轉)); \n        int y = (int)(cy + 半徑 * sin(i * 角度 + 旋轉)); \n        draw_star(img, x, y, 19, 黃色, M_PI / 5.0); \n    } \n} \n  \nvoid draw_star(gdImagePtr img, int x, int y, int 大小, int 顏色, 雙rotation_angle) { \n    gdPoint點[10]； \n  \n    // 計算星形的五個外點和五個內點 \n    雙外半徑 = 大小 / 2； \n    雙內半徑 = 大小 / 6； \n    雙倍角度 = M_PI / 5.0； \n  \n    for (int i = 0; i < 10; i++) { \n        雙半徑 = (i % 2 == 0) ?  外半徑：內半徑； \n        雙 theta = 旋轉角度 + i * 角度； \n        點[i].x = x + 半徑 * cos(theta); \n        點[i].y = y + 半徑 * sin(theta); \n    } \n  \n    // 使用 gdImageFilledPolygon 較差星形 \n    gdImageFilledPolygon(img, 點, 10, 顏色); \n} \n \n \n 清除 \n cd 下載 cc gd_proc_flag.c -lgd -lm  ./a.out \n', 'tags': '', 'url': '中國.html'}, {'title': 'w6', 'text': '\n', 'tags': '', 'url': 'w6.html'}, {'title': '美國', 'text': '\n #include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n \n無效draw_usa_flag（gdImagePtr img）； \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double spin_angle); \n \nint main() { \n    整數寬度=800； \n    int 高度 = (int)(寬度 / 1.9); \n \n    gdImagePtr img = gdImageCreateTrueColor(寬度, 高度); \n    gdImageAlphaBlending(img, 0); \n \n    繪製_美國_標誌（img）； \n \n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb"); \n    如果（輸出檔== NULL）{ \n        fprintf(stderr, "開啟輸出檔時發生錯誤。\\n"); \n        返回1； \n    } \n \n    gdImagePngEx(img, 輸出檔, 9); \n    fclose(輸出檔); \n    gdImageDestroy(img); \n \n    返回0； \n} \n \n無效draw_usa_flag（gdImagePtr img）{ \n    int 寬度 = gdImageSX(img); \n    int 高度 = gdImageSY(img); \n    int 紅、白、藍； \n    // 國旗顏色 \n    紅色 = gdImageColorAllocate(img, 178, 34, 52);  // 紅色條紋 \n    白色 = gdImageColorAllocate(img, 255, 255, 255);  // 白色條紋 \n    藍色 = gdImageColorAllocate(img, 60, 59, 110);  // 藍色 \n \n    int stripe_height = 高度 / 13; \n    int stripe_width = 寬度； \n    int star_size = (int)(0.0308 * 高度);  // 星星大小 \n \n    for (int y = 0; y < 高度; y += stripe_height) { \n        if (y / stripe_height % 2 == 0) { \n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, 紅色); \n        } 別的 { \n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, 白色); \n        } \n    } \n \n    gdImageFilledRectangle(img, 0, 0, 寬度 * 2 / 5, stripe_height * 7, 藍色); \n \n    int star_spacing_x = (int)(0.129 * 高度);  // 橫向恆星之間的距離 \n    int star_spacing_y = (int)(0.054 * 高度);  // 縱向星星之間的距離 \n    int star_start_x = (int)(0.125 * 高度);  // 星星的起始X位置 \n    int star_start_y = (int)(0.0485 * 高度);  // 恆星的起始Y位置 \n \n    for (int row = 0; row < 9; row++) { \n        int starPerRow = (行 % 2 == 0) ?  6：5； \n \n        // 計算2、4、6和8排星星的偏移量 \n        int offset_x = (行 % 2 == 0) ?  star_spacing_x / -2 : 0; \n \n        for (int star = 0; star < starPerRow; star++) { \n            int x = star_start_x + star * star_spacing_x + offset_x; \n \n            // 旋轉角度（以弧度為單位） \n            雙旋轉角度 = M_PI / 5;  // 忘記旋轉多少度 \n \n            int y = star_start_y + 行 * star_spacing_y; \n            draw_star(img, x, y, star_size, 白色, 旋轉角度); \n        } \n    } \n} \n \nvoid draw_star(gdImagePtr img, int x, int y, int 大小, int 顏色, 雙rotation_angle) { \n    gdPoint點[10]； \n \n    for (int i = 0; i < 10; i++) { \n        雙倍角度 = M_PI / 2 + i * 2 * M_PI / 10 + 旋轉角度； \n        int 半徑 = (i % 2 == 0) ?  尺寸：尺寸/2； \n        點[i].x = x + 半徑 * cos(角); \n        點[i].y = y + 半徑 * sin(角); \n    } \n \n    // 使用指定的顏色填滿星星 \n    gdImageFilledPolygon(img, 點, 10, 顏色); \n} \n \n 清除 \n cd 下載 cc gd_roc_flag.c -lgd -lm  ./a.out \n \n', 'tags': '', 'url': '美國.html'}, {'title': '台灣', 'text': '\n #include <stdio.h> \n#include <gd.h> \n#include <數學.h> \n \n無效draw_roc_flag（gdImagePtr img）； \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue); \n \nint main() { \n    // width 3: height 2 \n    int width = 1200; \n    int height = (int)(width*2.0 / 3.0); \n \n    gdImagePtr img = gdImageCreateTrueColor(width, height); \n    gdImageAlphaBlending(img, 0); \n \n    draw_roc_flag(img); \n \n    FILE *outputFile = fopen("./roc_flag.png", "wb"); \n    if (outputFile == NULL) { \n        fprintf(stderr, "Error opening the output file.\\n"); \n        return 1; \n    } \n    gdImagePngEx(img, outputFile, 9); \n    fclose(outputFile); \n    gdImageDestroy(img); \n    return 0; \n} \n \nvoid draw_roc_flag(gdImagePtr img) { \n    int width = gdImageSX(img); \n    int height = gdImageSY(img); \n    int red, white, blue; \n    int center_x = (int)(width/4); \n    int center_y = (int)(height/4); \n    int sun_radius = (int)(width/8); \n \n    // Colors for the flag \n    red = gdImageColorAllocate(img, 242, 0, 0); // Red color \n    white = gdImageColorAllocate(img, 255, 255, 255); // White stripes \n    blue = gdImageColorAllocate(img, 0, 41, 204); // Blue \n \n    // 繪製紅色矩形區域 \n    gdImageFilledRectangle(img, 0, 0, width, height, red); \n \n    // 繪製藍色矩形區域 \n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue); \n \n    // 繪製太陽 \n    draw_white_sun(img, center_x, center_y, sun_radius, white, red, blue); \n} \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int white, int red, int blue) { \n    float angle = 0; \n    int numRays = 12; // 光芒的數量 \n \n    gdPoint points[3]; // 三個頂點的陣列 \n \n    for (int i = 0; i < numRays; i++) { \n        angle = i * (2 * M_PI / numRays); \n        float x1 = center_x + cos(angle) * sun_radius; \n        float y1 = center_y + sin(angle) * sun_radius; \n \n        // 調整兩個底邊頂點的位置 \n      float x2 = center_x + cos(angle + 0.35) * (sun_radius * 0.5); \n      float y2 = center_y + sin(angle + 0.35) * (sun_radius * 0.5); \n      float x3 = center_x + cos(angle - 0.35) * (sun_radius * 0.5); \n      float y3 = center_y + sin(angle - 0.35) * (sun_radius * 0.5); \n \n        // 設定多邊形的三個頂點 \n        points[0].x = (int)x1; \n        points[0].y = (int)y1; \n        points[1].x = (int)x2; \n        points[1].y = (int)y2; \n        points[2].x = (int)x3; \n        points[2].y = (int)y3; \n \n        gdImageFilledPolygon(img, points, 3, white); \n    } \n  //外圈 \n  gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.2, sun_radius * 1.2, 藍色); \n   \n    // 相似太陽內部 \n    gdImageFilledEllipse(img, center_x, center_y, sun_radius * 1.1, sun_radius * 1.1, 白色); \n} \n \n \n 清除 \n cd 下載 cc gd_roc_flag.c -lgd -lm  ./a.out \n \n', 'tags': '', 'url': '台灣.html'}, {'title': 'W5', 'text': '// 包含標準輸出入程式庫的標頭文件 \n// https://blog.csdn.net/weixin_38468077/article/details/101069365 \n// http://www.gnuplot.info/demo/ \n// https://github.com/sysprog21/rv32emu \n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3 \n// https://cs61c.org/fa23/ \n// https://greenteapress.com/wp/think-python-2e/ \n// https://github.com/ecalvadi/c99-examples \n// https://github.com/gouravthakur39/beginners-C-program-examples \n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples \n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf \n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf \n// https://jsomers.github.io/cbook/cbook.pdf \n// https://jsomers.github.io/cbook/index.html \n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf \n// http://cslibrary.stanford.edu/101/EssentialC.pdf \n// https://publications.gbdirect.co.uk/c_book/ \n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf \n// ***** 在replit上執行 \n// CD 下載 \n// cc gnuplot_ex1.c -o gnuplot_ex1 \n// ./gnuplot_ex1 \n#include <stdio.h> \n \n// 主函式 \nint main() { \n// 使用 popen 啟動 Gnuplot 進程 \nFILE *gnuplotPipe = popen("gnuplot -persistent", "w"); \n如果（！gnuplotPipe）{ \nfprintf(stderr, "無法啟動 Gnuplot。\\n"); \n返回1； \n} \n \n// 使用Gnuplot繪圖指令，指定字體並輸出為PNG \nfprintf(gnuplotPipe, "設定終端 png 字體 \'預設,10\' 大小 800,400\\n"); \nfprintf(gnuplotPipe, "設定輸出 \'./../images/gnuplot_ex1.png\'\\n"); \nfprintf(gnuplotPipe, "強度 sin(x)"); \n// 關閉popen \npclose(gnuplotPipe); \n \n返回0； \n} \n 明確 \n 海報下載\xa0 \n 抄送gunplot_ex1.c \n 。/A。 輸出 \n \n', 'tags': '', 'url': 'W5.html'}, {'title': '布萊頓', 'text': 'https://en.wikipedia.org/wiki/Python_（程式語言） \n 例子： \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python教學： \n https://docs.python.org/3/tutorial/ \n Python的平衡介紹 \n 縮排（Python採用4個Spaces縮排，以介面執行範圍） \n 變數（ Python 關鍵字 ） \n 註（#單行註解、三單標註或三雙標註標註多行註解） \n 數 (整數 int(), 浮點數 float()) \n 字串 （字符串） \n print (Python 內建函數,  print() 函數式) \n Python是控制流程工具 \n 為了 \n 如果 \n 範圍 \n 開放 \n 讀 \n 清單 \n 元組 \n 字典 \n 功能 \n 嘗試...除了 \n 休息時間 \n 曾經 \n 類別 \n 此頁面示範如何在同一頁面下加入多個線上Ace編輯器與執行按鈕（ practice_html.txt 動態頁面超檔案）。 \n Practice_html.txt 動態頁面超檔案應該可以在啟動Brython時，設定分割.py檔案放入downloads/py目錄中引用。 \n 也所有即將出現的對應 html 也使用 Brython 產生，然後編寫為 類別 後，在範例匯入時交叉 實例 引用。 \n <!-- 啟動 Brython --> \n<腳本> \n視窗.onload=函數(){ \nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']}); \n} \n</> 腳本 \n 從1累加到100： \n 1加到100 \n 將 iterable 與 iterator 相關說明 ，利用 Brython 與 Ace Editor 整理頁面。 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從1累加到100第2部分： \n 1加到100 cango_三_齒輪 BS蛇 人工智慧俄羅斯區塊鏈 旋轉塊 \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n 文件名稱： .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n 跑步   輸出   明確輸出區 清晰的繪圖區 重新載入 \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': '布萊頓.html'}]};