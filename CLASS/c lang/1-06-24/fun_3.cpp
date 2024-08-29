#include<stdio.h>
add(){
	int a,b;
	printf("enter a");
	scanf("%d\n",&a);
	printf("enter b");
	scanf("%d\n",&b);
	return a+b;
	
}
main(){
	int result = add();
	printf("addition is %d\n",result);
//	printf("addition is %d\n",add());
	
}
