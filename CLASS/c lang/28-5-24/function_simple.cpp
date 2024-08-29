#include<stdio.h>
fac(){
	int fac=1,n;
	printf("enter number ");
	scanf("%d",&n);
	for(int i=1;i<=n;i++)
	{
		fac*=i;
	}
	printf("%d",fac);
}
prime(){
	int c=0,i,n;
	printf("\nenter number ");
	scanf("%d",&n);
	for(int i=1;i<=n;i++)
	{
	if(n%i==0)
		{
			c++;
		}
	}
if(c==2)
{
	printf("prime ");
}
else{
	printf("not prime ");
}
}
main(){
fac();	
prime();
}
