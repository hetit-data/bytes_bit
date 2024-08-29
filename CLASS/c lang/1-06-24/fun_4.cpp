#include<stdio.h>
fac(int n)
{
	int fact=1;
	printf("enter n \n");
	scanf("%d",&n);
	for(int i=1;i<=n;i++)
	{
	    fact*=i;
	}
	return fact;
}
main()
{
	printf("%d",fac(5));
}

