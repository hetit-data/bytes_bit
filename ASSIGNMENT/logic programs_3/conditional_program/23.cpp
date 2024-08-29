#include<stdio.h>
main(){
	int week_day_number;
	printf("enter the weekday ");
	scanf("%d",&week_day_number);
	if(week_day_number==1)
	{
		printf("monday ");
	}
	else if(week_day_number==2)
	{
		printf("tuesday");
		
	}
	else if(week_day_number==3)
	{
		printf("wednesday");
		
	}
	else if(week_day_number==4)
	{
		printf("thursday");
		
	}
	else if(week_day_number==5)
	{
		printf("friday");
		
	}
	else if(week_day_number==6)
	{
		printf("saturday");
		
	}
	else if(week_day_number==7)
	{
		printf("sunday");
		
	}
	else{
		printf("invalid");
		
	}
	
	
	
}
