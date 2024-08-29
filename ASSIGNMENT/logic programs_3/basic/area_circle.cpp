#include<stdio.h>
main(){
	
	int pi=3.14;
	int r,d;
	int radius,circumference;
	printf("area of circle is pi * r * r\n");
	printf("enter r for radius\n");
	scanf("%d\n",&r);
	radius = pi*r*r;
	printf(" radius is %d\n",radius);
	printf("circumference of circle is pi * d\n");
	printf("enter d for diameter\n");
	scanf("%d\n",&d);
	circumference = pi*d;
	printf(" circumference is %d\n",circumference);
	
	
	
}
