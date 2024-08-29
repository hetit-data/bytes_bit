#include <stdio.h>
#include <ctype.h>

int main() {
    char country_name[100];
    int i = 0;

    printf("Enter the country's name: ");
    scanf("%99[^\n]", country_name);

    printf("The abbreviated form of the country's name is: ");
    
    if (isalpha(country_name[0])) {
        printf("%c", toupper(country_name[0]));
    }

    while (country_name[i] != '\0') {
    
        if (country_name[i] == ' ' || country_name[i] == '-') {
            if (isalpha(country_name[i + 1])) {
                printf("%c", toupper(country_name[i + 1]));
            }
        }
        i++;
    }

    printf("\n");

    return 0;
}
