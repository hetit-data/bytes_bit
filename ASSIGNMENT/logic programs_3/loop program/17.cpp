#include<stdio.h>
main(){
int i=0,n,no,odd=0,even=0;
printf("enter number ");
scanf("%d",&no);
while(i<no)
{
	printf("enter numbers : \n");
	scanf("%d",&n);
	if(n%2==0)
	{
		even++;
	}
	else{
		odd++;
	}
	
	i++;
}

printf("even %d",even);
printf("odd %d\n",odd);


}
