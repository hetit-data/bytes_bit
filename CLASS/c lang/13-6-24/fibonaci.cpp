#include<stdio.h>
main(){
	int i,n,n1=0,n2=1,n3;
	printf("enter the terms ");
	scanf("%d",&n);
	printf("%d\n",n1);
	printf("%d\n",n2);
	
for(i=3;i<=7;i++)
{
	n3=n1+n2;
	printf("%d\n",n3);
	n1=n2;
	n2=n3;
	
}
}
