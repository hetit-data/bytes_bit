#include<stdio.h>
main(){
	
	int fact=1;
	int i,n;
	printf("enter the number for factorial \n");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		fact=fact*i;
	}
	printf("factorial is %d \n",fact);
}
