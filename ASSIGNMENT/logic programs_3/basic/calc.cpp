#include <stdio.h>

// Declaring functions
void addition();
void subtraction();
void multiplication();
void division();

int main() {
    int choice = 0;

    // calculator
    printf("----------MENU----------");
    printf("1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit");
    

    while (1) {
        printf("\nEnter the operation you wish to perform: ");
        int result = scanf("%d", &choice);

        if (result != 1 || choice < 1 || choice > 5) { //check for wrong choice
            printf("Invalid\n");
            while (getchar() != '\n'); 
            continue;
        }
//select choice base in user input using switch case
        switch (choice) {
            case 1:
                addition();
                break;
            case 2:
                subtraction();
                break;
            case 3:
                multiplication();
                break;
            case 4:
                division();
                break;
            case 5:
                printf("exit\n");
                return 0;
                print("--------------------")
        }
    }
}

void addition() {
    int a, b;
    printf("Enter First number: ");
    scanf("%d", &a);
    printf("Enter Second number: ");
    scanf("%d", &b);
    printf("Result: %d + %d = %d\n", a, b, (a + b));
}

void subtraction() {
    int a, b;
    printf("Enter First number: ");
    scanf("%d", &a);
    printf("Enter Second number: ");
    scanf("%d", &b);
    printf("Result: %d - %d = %d\n", a, b, (a - b));
}

void multiplication() {
    int a, b;
    printf("Enter First number: ");
    scanf("%d", &a);
    printf("Enter Second number: ");
    scanf("%d", &b);
    printf("Result: %d * %d = %d\n", a, b, (a * b));
}

void division() {
    int a, b;
    printf("Enter First number: ");
    scanf("%d", &a);
    printf("Enter Second number: ");
    scanf("%d", &b);
    if (b != 0) {
        printf("Result: %d / %d = %d\n", a, b, (a / b));
    } else {
        printf("Division by zero is not allowed.\n");
    }
}

