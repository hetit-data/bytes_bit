#include <stdio.h>

int main() {
    int num;

    printf("Enter a number to print multiplication tables up to: ");
    scanf("%d", &num);

    for (int i = 1; i <= num; i++) {
        printf("Multiplication table for %d:\n", i);
        
        for (int j = 1; j <= 10; j++) {
            printf("%d x %d = %d\n", i, j, i * j);
        }
        printf("\n"); 
    }

    return 0;
}

