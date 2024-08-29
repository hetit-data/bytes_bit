#include<stdio.h>
fac(int n)
{
	if(n<=1)
	{
		return 1;
	}
	return n*fac(n-1); 
}
main(){
	
	printf("%d",fac(5));
}

