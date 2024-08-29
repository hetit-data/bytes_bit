#include<stdio.h>  
 int main()    
{    
int n,r,sum=0,temp;    
printf("enter the number=");    
scanf("%d",&n);    
temp=n;    
for(;n>0;n=n/10)    
{    
r=n%10;    
sum=sum+(r*r*r);    
   
}    
if(temp==sum)    
printf("armstrong  number ");    
else    
printf("not armstrong number");    
return 0;  
}   
