#include<stdio.h>
main(){
	
	int i=1,n,od=0,ev=0,odsum=0,evsum=0;
	
    while(i<=5)
    {
    	printf("\nenter the number %d \n",i);
    	scanf("%d",&n);
    	
    	if(n%2==0)
    	{
    		printf("number is even");
    		ev++;
    		evsum+=n;
		}
		else{
			printf("number is odd");
			od++;
			odsum+=n;
		}
    	i++;
	}
printf("the number of even is %d\n",ev);
printf("the number of odd is %d\n",od);
printf("the number of even sum is %d\n",evsum);
printf("the number of odd sum is %d\n",odsum);
    
}
