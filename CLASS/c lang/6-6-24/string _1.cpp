#include<stdio.h>
#include<string.h>
main(){
//	char s[2]="heet";\\will not take statically  spaced string and string greater than length specify for that use gets
	char a[2],b[2];
//	printf("string is %s",s);
	printf("enter string \n");
	scanf("%s",&a);
	printf("string a  is %s\n",a);
	printf("enter string b \n");
	scanf("%s",&b);
	printf("string b  is %s\n",b);
	int c =strcmp(a,b);//it works in asci value
	printf("comparision is %d",c);
	
	printf("string both is %s",strcat(a,b));
	
//	strcpy(b,a);
//	printf("string  a is %s\n",b);
//	

	printf("string a length is %d",strlen(a));
	
}
