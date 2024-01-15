
  #include <stdio.h>  // Include standard input/output library
  #include <stdlib.h> // Include standard library for additional functions

  // Declare the function 'test' with three integer parameters
  int test(int x, int y, int z);

  int main(void)
  {
      // Call the function 'test' with arguments 11, 20, and 12, and print the result
      printf("%d", test(11, 20, 12));

      // Print a newline for formatting
      printf("\n");

      // Call the function 'test' with arguments 30, 30, and 17, and print the result
      printf("%d", test(30, 30, 17));

      // Print a newline for formatting
      printf("\n");

      // Call the function 'test' with arguments 25, 35, and 50, and print the result
      printf("%d", test(25, 35, 50));

      // Print a newline for formatting
      printf("\n");

      // Call the function 'test' with arguments 15, 12, and 8, and print the result
      printf("%d", test(15, 12, 8));
  }

  // Function definition for 'test'
  int test(int x, int y, int z)
  {
      // Check if either of the following conditions are true for any of the variables (x, y, or z):
      // 1. The variable is between 20 and 50 (inclusive)
      // Return 1 (true) if any condition is true, otherwise return 0 (false).
      return (x >= 20 && x <= 50) || (y >= 20 && y <= 50) || (z >= 20 && z <= 50);
  }
