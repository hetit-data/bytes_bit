#include <stdio.h>

int main() {
    char name[50];
    float salary, total_salary = 0, average_salary;
    
    printf("Enter names and salaries of 5 employees:\n");
    for (int i = 0; i < 5; i++) {
        printf("Employee %d name: ", i + 1);
        scanf("%s", name);
        printf("Employee %d salary: ", i + 1);
        scanf("%f", &salary);
        total_salary += salary;
    }

    average_salary = total_salary / 5;

    printf("\nTotal Salary: %.2f\n", total_salary);
    printf("Average Salary: %.2f\n", average_salary);

    return 0;
}

