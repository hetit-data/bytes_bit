#include <stdio.h>
main() {
    float fahrenheit, celsius;

    printf("Enter temperature in Fahrenheit: ");
    scanf("%f", &fahrenheit);

    celsius = (5.0 / 9.0) * (fahrenheit - 32.0);
    printf("Temperature in Celsius: %.2f\n", celsius);

}

