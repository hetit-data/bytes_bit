#include<stdio.h>
main(){
	int a[2][3],b[2][3],i,j;
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<3;j++)
		{
			printf("\n enter the elements : ");
			scanf("%d",&a[i][j]);
		}
	}
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<3;j++)
		{
	
			printf(" elements are %d %d is %d\n",i,j,a[i][j]);
		}
	}
	printf("\n-----------------------------\n");
		for(int i=0;i<2;i++)
	{
		for(int j=0;j<3;j++)
		{
			printf("\n enter the elements  for b: ");
			scanf("%d",&b[i][j]);
		}
	}
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<3;j++)
		{
	
			printf(" elements of b are %d %d is %d\n",i,j,b[i][j]);
		}
	}
	printf("\n--------------\n");
	for(int i=0;i<2;i++)
	{
		for(int j=0;j<3;j++)
		{
	
			printf("\t%d",a[i][j]+b[i][j]);
			
		}
		printf("\n");
	}
	
	
	
}
