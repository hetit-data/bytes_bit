#include<stdio.h>
sum(int n)
{
	if(n<1)
	{
		return 0;
	}
	return n+sum(n-1); 
}
main(){
	
	printf("%d",sum(5));
}

