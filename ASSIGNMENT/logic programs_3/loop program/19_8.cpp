#include <stdio.h>

#define N 10

void fillSpiral(int matrix[N][N]) {
    int num = 1;
    int top = 0, bottom = N - 1, left = 0, right = N - 1;

    while (num <= N * N) {
        // Fill the top row
        for (int i = left; i <= right && num <= N * N; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // Fill the right column
        for (int i = top; i <= bottom && num <= N * N; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // Fill the bottom row
        for (int i = right; i >= left && num <= N * N; i--) {
            matrix[bottom][i] = num++;
        }
        bottom--;

        // Fill the left column
        for (int i = bottom; i >= top && num <= N * N; i--) {
            matrix[i][left] = num++;
        }
        left++;
    }
}

void printMatrix(int matrix[N][N]) {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            printf("%3d ", matrix[i][j]);
        }
        printf("\n");
    }
}

int main() {
    int matrix[N][N] = {0};

    fillSpiral(matrix);
    printMatrix(matrix);

    return 0;
}

