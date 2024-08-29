#include <stdio.h>
main()
{

   char c;
   printf("enter the character");
   scanf("%c",&c);

    switch (c) {
        case 'A':
            printf("vowel.");
            break;

        case 'E':
            printf("vowel");
            break;

        case 'I':
            printf("vowel");
            break;
		
        
        case 'O':
            printf("vowel");
            break;
            
        case 'U':
            printf("vowel");
            break;
        default:
            printf("Default case is Matched.");
            break;
    }

}
