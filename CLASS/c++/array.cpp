#include<iostream>
using namespace std;
main(){
	int a[5],i,j,temp;
	for(i=0;i<=5;i++)
	{
	cout<<"enter ele "<<endl;
	cin>>a[i];
	}
	for(i=0;i<=5;i++)
	{
		for(j=i+1;j<=5;j++)
		{
			if(a[i]>a[j]){
			temp=a[i];
			a[i]=a[j];
			a[j]=temp;	
			}
		}
	}
	for(i=0;i<=5;i++)
	{
		cout<<a[i]<<endl;
	}
	
	
}
