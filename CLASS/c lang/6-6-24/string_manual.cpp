#include<stdio.h>
main(){
	char a[3];
	printf("enter string");
	scanf("%s",&a);
	
	int len;
	for(int i=0;a[i]!='\0';i++)
	{
		len++;
	}
	printf("length is %d",len);
}
