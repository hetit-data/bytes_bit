#include<stdio.h>
main(){
	int a,b,choice;
	printf("enter 1 for mul \n");
	printf("enter 2 for div \n");
	printf("enter 3 for add \n");
	printf("enter 4 for sub \n");
	printf("enter 5 for mod \n");
	

	while(true){
	printf("enter choice \n");
	scanf("%d",&choice);
	if(choice == 1)
	{
		printf("enter a \n");
		scanf("%d",&a);
		
		printf("enter b \n");
		scanf("%d",&b);
		
		printf("multiplication is %d \n",a*b);
		
		
	}
	else if(choice == 2)
	{
		printf("enter a \n");
		scanf("%d",&a);
		
		printf("enter b \n");
		scanf("%d",&b);
		
		printf("division is %d \n",a/b);
		
		
	}
	else if(choice == 3)
	{
		printf("enter a \n");
		scanf("%d",&a);
		
		printf("enter b \n");
		scanf("%d",&b);
		
		printf("addition is %d \n",a+b);
		
		
	}
	else if(choice == 4)
	{
		printf("enter a \n");
		scanf("%d",&a);
		
		printf("enter b \n");
		scanf("%d",&b);
		
		printf("substraction  is %d \n",a-b);
		
		
	}
	else if(choice == 5)
	{
		printf("enter a \n");
		scanf("%d",&a);
		
		printf("enter b \n");
		scanf("%d",&b);
		
		printf("modulo is %d \n",a%b);
		
		
	}
	else{
		printf("invalid choice ");
		
	}
	
}
	
}
