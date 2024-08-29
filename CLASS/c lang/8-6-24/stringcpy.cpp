#include<stdio.h>
#include<string.h>
main()
{
	char str[100],copy[100];
    int i;
    
    scanf("%s",str);

     
    for(i = 0; str[i] != '\0'; i++)
          copy[i] = str[i];
    

     
    copy[i] = '\0';
  
    
    printf("Copied string = %s",copy);
    

	
}
