#include <stdio.h>

main()
{
	int age;
	printf("enter age ");
	scanf("%d",&age);
	
	if(age>120){ // check condition 1
		printf("invalid age ");
	}
	else if (age >= 18)// cond 2
	{
		printf("you can vote ");
	}
	else {
		printf("you are below age");
		
	}
}

