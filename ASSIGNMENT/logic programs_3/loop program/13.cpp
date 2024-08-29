#include<stdio.h>
main()
{
	int i=1,n=5,fact=1;
	while(i<=n)
	{
		fact=fact*i;
		i++;
	}
	printf("factorial is %d ",fact);
}
