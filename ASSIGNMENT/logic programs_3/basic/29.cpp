#include<stdio.h>
main(){
	int minutes,second,hour;
	printf("enter the minutes\n");
	scanf("%d",&minutes);
	
	second =minutes*60;
	hour=minutes/60;
	printf("second is %d\n",second);
	printf("hour is %d\n",hour);
	
}
