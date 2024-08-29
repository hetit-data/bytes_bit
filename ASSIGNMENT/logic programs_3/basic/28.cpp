#include<stdio.h>
main(){
	float year,days,month;
	printf("enter the years \n");
	scanf("%f",&year);
	
	days=year * 365;
	printf("days are %f",days);
	
	month = year * 12;
	printf("\nmonths are %f ",month);
}
