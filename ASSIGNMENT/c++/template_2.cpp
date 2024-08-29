#include<iostream>
using namespace std;
template<typename T>
T sort(T n)
	{
	int a[n];
	for(int i=1;i<=n;i++)
	{
	cout<<"enter ele"<<endl;
	cin>>a[i];
	}
	
	for(int i=1;i<=n;i++)
	{
		for(int j=i+1;j<=n;j++)
		{
			if(a[i]>a[j])
			{
				int temp=a[i];
			a[i]=a[j];
			a[j]=temp;
			}
		}
	}
	for(int i=1;i<=n;i++)
	{
		cout<<a[i]<<endl;
	}
		
	}

main(){
	sort<int>(5);
}
