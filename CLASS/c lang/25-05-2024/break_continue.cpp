#include<stdio.h>
main(){
	int i;
	for(i=0;i<=10;i++)
	{//if print here in both break and continue it will print condition value
		if(i==5)
		{
			break;
		}
		printf("elements are %d\n",i);
	}
printf("\n\ncontinue ");
	for(i=0;i<=10;i++)
	{
		if(i==5)
		{
			continue;
		}
		printf("elements are %d\n",i);
	}
}
