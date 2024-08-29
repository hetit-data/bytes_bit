#include<stdio.h>
main(){
	int ch,a,b;
	printf("\npress 1 for addition ");
	printf("\npress 2 for substraction ");
	printf("\npress 3 for division ");
	printf("\npress 4 for multiplication ");
	printf("\npress 5 for exit  ");
	while(true){
		printf("enter the choice\n");
		scanf("%d",&ch);
		if(ch==1){
			printf("addition ");
			printf("\nenter number 1 for addition ");
			scanf("%d",&a);
	        printf("\nenter number 2 for addition ");
	        scanf("%d",&b);
	        printf("\naddition is %d",a+b);
	        
	}
	else if(ch==2){
		printf("substraction ");
			printf("\nenter number 1 for substraction ");
			scanf("%d",&a);
	        printf("\nenter number 2 for substraction ");
	        scanf("%d",&b);
	        printf("\nsub is %d",a-b);
	
		}
			else if (ch==3){
		printf("division ");
			printf("\nenter number 1 for division ");
			scanf("%d",&a);
	        printf("\nenter number 2 for division ");
	        scanf("%d",&b);
	        printf("\ndivision is %d",a/b);
	
		}	else if(ch==4) {
		printf("multiplication ");
			printf("\nenter number 1 for multiplication ");
			scanf("%d",&a);
	        printf("\nenter number 2 for multiplication ");
	        scanf("%d",&b);
	        printf("\nmultiplication  is %d",a*b);
	
		}
			else if (ch==5){
		printf("thank you");
		break;
	
		}
		else{
			printf("invalid");
			break;
		}
		
	}
	
}
