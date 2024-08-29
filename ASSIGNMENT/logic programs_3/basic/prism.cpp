#include<stdio.h>

main(){
	int prism,w,h,l;
	printf("enter w");
	scanf("%d",&w);
	
	printf("enter h");
	scanf("%d",&h);
	
	printf("enter l");
	scanf("%d",&l);
	
	prism=2*(w*l+h*l+h*w);
	
	printf("prism is %d ",prism);
	
	
}
