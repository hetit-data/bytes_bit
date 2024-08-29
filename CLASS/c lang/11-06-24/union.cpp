//#include<stdio.h>
//	union mystruct{// cant be statically define means int a =10 is not allow we have to take user input
//		int a;
//		int b;
//		
//		
//	}s1,s2;//different variable for each data type
//	main(){
//		// union mystruct s1; to declare 
//		printf("\n enter the number ");
//		scanf("%d",&s1.a);
//		printf("\n enter the number 2  ");
//		scanf("%d",&s2.b);
//		printf("\n enter the number %d ",s1.a+s2.b);
//		
//		
//	}
#include<stdio.h>
union myunion{
	int sum,i;
	int a[5];
}s1,s2,s3;

main()
{
	for(s1.i=1;s1.i<=5;s1.i++)
	{
		printf("enter the elements \n");
		scanf("%d",&s2.a[s1.i]);
	}
	for(s1.i=1;s1.i<=5;s1.i++)
	{
		s3.sum+=s2.a[s1.i];
		
	}
printf("sum is %d",s3.sum);
}
