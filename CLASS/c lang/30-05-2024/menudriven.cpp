#include<stdio.h>
add(){
	int a,b;
	printf("\n enter a ");
	scanf("%d",&a);
	printf("\n enter b");
	scanf("%d",&b);
	printf("\n sum is %d ",a+b);
	
}
prime(){
	int n,c;
	printf("enter n");
	scanf("%d",&n);
	for(int i=1;i<=n;i++)
	{
		if(n%i==0)
		{
			c++;
		}
	
	
	}
	if(c==2)
		{
			printf("prime");
		}
		else {
			printf("not prime ");
		}
}
right(){
for(int i=1;i<=5;i++)
{
	for(int j=1;j<=i;j++)
	{
		printf("*");
	}
	printf("\n");
	}	
}
main(){
	int choice;


	printf("\n1. for addition ");
	printf("\n2. for prime ");
	printf("\n3. for right angle ");
	printf("\n4. for exit");

	while(1)
	{
		printf("\nenter choice ");
		scanf("%d",&choice);
		
		if(choice==1)
	{
		add();
	}
	else if (choice ==2)
	{
		prime();
		
	}
	else if (choice ==3 )
	{
		right();
	}
	else if (choice == 4)
	{
		break;
	}
	else{
		printf("invalid choice");
		continue;
		
	}
	}
}
