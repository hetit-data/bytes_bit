#include <stdio.h>
main() {
    int n = 4; 

    for (int i = 1; i < 2 * n; i++) {
        int stars = i <= n ? i : 2 * n - i;
        for (int j = 0; j < stars; j++) {
            printf("* ");
        }
        printf("\n");
    }

}

