#include<stdio.h>
#include<string.h>

main() {
    char str[100], copy[100], concat[200];
    int i, j;

    scanf("%s", str);
    scanf("%s", copy);

    for (i = 0; str[i] != '\0'; i++) {
        concat[i] = str[i];
    }
    

    for (j = 0; copy[j] != '\0'; j++, i++) {
        concat[i] = copy[j];
    }

    concat[i] = '\0';

    printf("%s\n", concat);

}

