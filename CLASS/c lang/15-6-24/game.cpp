#include<stdio.h>
main(){
	int n,original=43;
	while(1)
	{
		printf("enter the no\n ");
		scanf("%d",&n);
		if(n<original)
		{
			printf("numbeer is less");
		}
		else if(n==original)
		{
			printf("number is equal you win");
			break;
		}
		else if(n>50)
		{
			printf("number is to high");
		}
		else if(n>original && n<50)
		{
			printf("number is high");
		}	
		else{
			printf("invalid chocie ");
		}
	}
}
