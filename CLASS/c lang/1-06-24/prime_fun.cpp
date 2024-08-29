#include<stdio.h>

prime()
{
	int n,i,c=0;
	printf("Enter Number : ");
	scanf("%d",&n);
	
	for(i=1;i<=n;i++)
	{
		if (n%i==0)
		{
			c++;
		}
	}
	if (c==2)
	{
		return "Number is Prime";
	}
	else
	{
		return "Number is not Prime";
	}
}




main()
{
	
	printf(prime());	
}
