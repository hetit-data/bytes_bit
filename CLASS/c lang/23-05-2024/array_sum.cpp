#include <stdio.h>

int main() {
    int n;

    printf("Enter the size of the arrays: ");
    scanf("%d", &n);

    int arr1[n], arr2[n], sum[n];

    printf("Enter elements of the first array:\n");
    for (int i = 1; i <= n; i++) {
        printf("Element %d: ", i);
        scanf("%d", &arr1[i]);
    }

    printf("Enter elements of the second array:\n");
    for (int i = 1; i <= n; i++) {
        printf("Element %d: ", i );
        scanf("%d", &arr2[i]);
    }

    for (int i = 1; i <= n; i++) {
        sum[i] = arr1[i] + arr2[i];
    }

    printf("Sum of the two arrays:\n");
    for (int i = 1; i <= n; i++) {
        printf("Element %d: %d\n", i, sum[i]);
    }

    return 0;
}

