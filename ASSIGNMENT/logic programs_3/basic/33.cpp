#include <stdio.h>
main() {
    int number;
    
    printf("Enter an integer: ");
    scanf("%d", &number);
    
    
    printf("First three powers of %d:\n", number);
    printf("%d^1 = %d\n", number, number);
    printf("%d^2 = %d\n", number, number * number);
    printf("%d^3 = %d\n", number, number * number * number);
 
}

