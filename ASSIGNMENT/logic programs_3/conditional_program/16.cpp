#include<stdio.h>
main(){
int temp;
printf("enter the temp");
scanf("%d",&temp);

if(temp < 0)

{

printf("freezing weather\n");

}
else if(temp>=0 && temp<=10)
{
	printf("very cold \n");
}
else if (temp>=10 && temp <=20)
{
	printf("cold weather ");
}
else if (temp>=20 && temp <=30)
{
	printf("normal ");
}
else if (temp>=30 && temp <=40)
{
	printf("hot");
}
else 
{
	printf("very hot ");
}


}
