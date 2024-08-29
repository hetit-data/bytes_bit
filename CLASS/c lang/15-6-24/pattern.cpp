#include<stdio.h>
main(){
	
	int i,j,k=1,m;
	int n=10;
	for(i=1;i<=n;i++)
	{
		for(j=i+1;j<=n;j++)
		{
			if(i==n || j==n)
			{
				printf("%d ",k);
				k++;
			}
			else{
				printf(" ");
			}
		}
		printf("\n");
	}
}
