#include <stdio.h>

int main() {
    int customerID, units;
    char name[50];
    float totalBill;

    printf("Enter Customer ID: ");
    scanf("%d", &customerID);
    printf("Enter Customer Name: ");
    scanf("%s", name);
    printf("Enter Units Consumed: ");
    scanf("%d", &units);

    if (units <= 350) {
        totalBill = units * 1.20;
    } else if (units > 350 && units < 600) {
        totalBill = 350 * 1.20 + (units - 350) * 1.50;
    } else if (units >= 600 && units < 800) {
        totalBill = 350 * 1.20 + 250 * 1.50 + (units - 600) * 1.80;
    } else { 
        totalBill = 350 * 1.20 + 250 * 1.50 + 200 * 1.80 + (units - 800) * 2.00;
    }

    printf("\nElectricity Bill\n");
    printf("Customer ID   : %d\n", customerID);
    printf("Customer Name : %s\n", name);
    printf("Units Consumed: %d\n", units);
    printf("Total Amount  : $%.2f\n", totalBill);

    return 0;
}

