#include<stdio.h>
main(){
	for(int i=1;i<=5;i+=2)
	{
		for(int k=1;k<=5-i;k++)
		{
			printf(" ");
		}
		for(int j= 1;j<=i;j++)
		{
			printf("* ");
		}
		printf("\n");
	}
}

