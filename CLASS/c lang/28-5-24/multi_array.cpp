#include<stdio.h>
main(){
	int a[2][3],i,j;
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
	printf("%d ",a[0][1]);
	
	
	
}
