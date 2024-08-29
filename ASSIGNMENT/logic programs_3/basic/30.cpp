#include<stdio.h>
main(){
	int yrs,days,yrstoday,daytoyrs;
	printf("enter the yrs \n");
	scanf("%d",&yrs);
	yrstoday = yrs*365;
	
	printf("years to days is %d\n",yrstoday);
		
	printf("enter the days \n");
	scanf("%d",&days);

	
	daytoyrs=days/365;
	
	printf("days to yrs  is %d\n",daytoyrs);
	
	
}
