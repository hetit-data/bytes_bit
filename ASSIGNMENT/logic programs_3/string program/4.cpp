#include <stdio.h>

int main() {
    char str[1000];

    printf("Enter a string: ");
    scanf("%[^\n]", str); 
    
    int wordcount = 0;
    int i = 0;
    bool inword = false; 

    while (str[i] != '\0') {
        if ((str[i] != ' ' && str[i] != '\t' && str[i] != '\n' && str[i] != '\r') && !inword) {
            wordcount++; 
            inword = true; 
        }
    
        else if ((str[i] == ' ' || str[i] == '\t' || str[i] == '\n' || str[i] == '\r') && inword) {
            inword = false; 
        }
        i++; 
    }

    printf("Total number of words in the string: %d\n", wordcount);

    return 0;
}

