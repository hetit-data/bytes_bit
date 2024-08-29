#include <stdio.h>

int main() {
    int num1, num2, sum;
    
    printf("Enter the first number: ");
    scanf("%d", &num1);
    printf("Enter the second number: ");
    scanf("%d", &num2);
    
    sum = num1 + num2;
    
    printf("Sum of the numbers: %d\n", sum);
    if (sum >= -128 && sum <= 127) {
        printf("Sum fits within the range of a signed char.\n");
    } 
    if (sum >= -32768 && sum <= 32767) {
        printf("Sum fits within the range of a signed short int.\n");
    }
    if (sum >= -2147483648 && sum <= 2147483647) {
        printf("Sum fits within the range of a signed int.\n");
    } 
    if (sum >= -9223372036854775808LL && sum <= 9223372036854775807LL) {
        printf("Sum fits within the range of a signed long long int.\n");
    }

    return 0;
}

