//#include<stdio.h>
//main(){
//	FILE *fp;
//	fp=(fopen("test1.txt","r"));
//	char a[300];
//
//	fgets(a,300,fp);
//	
//		
//	printf("%s",a);
//
//	fclose(fp);
//	
//}

#include <stdio.h>

main() {
    FILE *fp;
    fp = fopen("test1.txt", "r");
    if (fp == NULL) {
        printf("Error opening file.\n");
        return 1;
    }
    
    char a[300];

    while (fgets(a, sizeof(a), fp) != NULL) {
        printf("%s", a);
    }

    fclose(fp);

}

