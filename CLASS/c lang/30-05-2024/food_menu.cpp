#include <stdio.h>

void displayMenu();
void takeOrder();
void generateBill();

float total = 0.0;

int main() {
    int choice;

    while (1) {
        printf("\n1. Display Menu");
        printf("\n2. Take Order");
        printf("\n3. Generate Bill");
        printf("\n4. Exit");
        printf("\nEnter choice: ");
        scanf("%d", &choice);

        switch (choice) {
            case 1:
                displayMenu();
                break;
            case 2:
                takeOrder();
                break;
            case 3:
                generateBill();
                break;
            case 4:
                return 0; // Exit the program
            default:
                printf("Invalid choice. Please try again.\n");
                break;
        }
    }

    return 0;
}

void displayMenu() {
    printf("\nMenu:\n");
    printf("1. Burger - $5.99\n");
    printf("2. Pizza - $8.99\n");
    printf("3. Pasta - $6.99\n");
    printf("4. Salad - $4.99\n");
    printf("5. Soda - $1.99\n");
}

void takeOrder() {
    int itemID, quantity;
    printf("\nEnter the item ID to order (0 to finish): ");
    while (1) {
        scanf("%d", &itemID);
        if (itemID == 0) break;

        printf("Enter quantity: ");
        scanf("%d", &quantity);

        if (itemID == 1) {
            total += 5.99 * quantity;
        } else if (itemID == 2) {
            total += 8.99 * quantity;
        } else if (itemID == 3) {
            total += 6.99 * quantity;
        } else if (itemID == 4) {
            total += 4.99 * quantity;
        } else if (itemID == 5) {
            total += 1.99 * quantity;
        } else {
            printf("Invalid item ID. Please try again.\n");
        }

        printf("Enter the item ID to order (0 to finish): ");
    }
}

void generateBill() {
    printf("\nTotal Bill: $%.2f\n", total);
}

