#include<stdio.h>
main(){
	int n,number;
	printf("enter the number ");
	scanf("%d",&n);
	for(int i =1;i<=n;i++)
	{
	printf("enter the numbers \n ");
	scanf("%d",&number);
	
	}
	for(int i =1;i<=number;i++)
	{printf("table of %d\n ",i);
for(int j=1;j<=10;j++)
{
	printf("%d * %d = %d\n",i,j,i*j);
}

printf("----------------------------------\n");
	
	}
	
}
