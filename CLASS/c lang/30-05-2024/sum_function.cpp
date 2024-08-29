#include<stdio.h>
myfun(int a,int b)//n parameters
{
	printf("%d %d",a,b);
	int sum;
	sum=a+b;
	printf("\n sum is %d",sum);
	
	
}
main(){
//	myfun(5);//arguments 
int a,b;
printf("enter a ");
scanf("%d",&a);
printf("enter b ");
scanf("%d",&b);
myfun(a,b);

}
