#include<stdio.h>
myfun(int n)//n parameters
{
	printf("%d",n);
	int fac=1,i;
	for(i=1;i<=n;i++)
	{
		fac*=i;
	}
	printf("\n factorial is %d",fac);
	
	
}
main(){
//	myfun(5);//arguments 
int a;
printf("enter a ");
scanf("%d",&a);
myfun(a);

}
