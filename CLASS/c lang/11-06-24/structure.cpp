//#include<stdio.h>
//	struct mystruct{// cant be statically define means int a =10 is not allow we have to take user input
//		int a;
//		int b;
//		
//		
//	}s1;
//	main(){
//		// struct mystruct s1; to declare 
//		printf("\n enter the number ");
//		scanf("%d",&s1.a);
//		printf("\n enter the number 2  ");
//		scanf("%d",&s1.b);
//		printf("\n enter the number %d ",s1.a+s1.b);
//		
//		
//	}
#include <stdio.h>

struct mystruct {
    int a[5];
    int i, j, temp;
};

main() {
    struct mystruct s1;

  
    printf("Enter 5 numbers:\n");
    for (s1.i = 0; s1.i < 5; s1.i++) {
        scanf("%d", &s1.a[s1.i]);
    }

 
    for (s1.i = 0; s1.i < 4; s1.i++) {
        for (s1.j = s1.i + 1; s1.j < 5; s1.j++) {
            if (s1.a[s1.i] > s1.a[s1.j]) {
                s1.temp = s1.a[s1.i];
                s1.a[s1.i] = s1.a[s1.j];
                s1.a[s1.j] = s1.temp;
            }
        }
    }


    printf("Sorted array is:\n");
    for (s1.i = 0; s1.i < 5; s1.i++) {
        printf("%d ", s1.a[s1.i]);
    }

}

