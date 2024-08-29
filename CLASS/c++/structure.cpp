#include<stdio.h>
#include<string.h>

	struct mystruct{
		int id;
		char name[30];
		float percentage;
		char address[100];
		char pass[30];
		char upass[30];
		
	}s1;
	void input(){
		printf("\n enter the id ");
		scanf("%d",&s1.id);
		printf("\n enter the name  ");
	    gets(s1.name);
		printf("\n enter the percentage");
		scanf("%f",&s1.percentage);
		printf("\n enter the address");
		gets(s1.address);
		
	}
	void output(){
		printf("\n the id %d",s1.id);
		puts(s1.name);
		printf("\n the percentage %f",s1.percentage);
		puts(s1.address);
	}
	void compare(){
		printf("enter u pass");
		gets(s1.upass);
		int a = strcmp(pass,upass);
		printf("string is %d ",a);
		if(!strcmp(pass,upass)) //if not put ! it outputs not correct if is correct as if take 0 as wrong and 1 as true because 0 means true in strcmp and 1 is true in if condition
{
	printf("correct");
}
else{
	printf("not correct");
}
	}
	main(){
	
		printf("--------------enter the input for student ------------");
		input();
		printf("--------------output for student ------------");
		output();
		pass();
		
		
		
	}
