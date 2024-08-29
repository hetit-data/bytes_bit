#include<stdio.h>
main(){
	int marks,total,percentage;
	for(int i=1;i<=5;i++)
	{
		printf("enter the marks of subject %d\n",i);
		scanf("%d",&marks);
		total+=marks;
	}
	percentage = total/5;
	printf("precentage is %d ",percentage);
	
	if(percentage<33)
	{
		printf("fail");
	}
	else{
		printf("pass");
	}
}
