#include<stdio.h>
main(){
	int number;
	printf("enter the number  ");
	scanf("%d",&number);
	if (number>0)
	{
		printf("number is positive ");
	}
	else if (number<0)
	{
		printf("number is negative ");
	}
	else {
		printf("number is neither nor of any ");
	}
}
