#include<stdio.h>
main(){
	int k=1;
	for(int i=1;i<=5;i++)
	{
		for(int j=1;j<=10;j++)
		{
			printf("%02d ",k);
			k++;
		}
		printf("\n");
	}
}
