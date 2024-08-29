#include <stdio.h>
main() {
    float salary, premium;

    printf("Enter your salary: ");
    scanf("%f", &salary);
    if (salary < 30000) {
        premium = 0.05 * salary;
    } else if (salary <= 60000) {
        premium = 0.07 * salary;
    } else {
        premium = 0.10 * salary;
    }

  
    printf("Your insurance premium is: $%.2f\n", premium);

    
}

