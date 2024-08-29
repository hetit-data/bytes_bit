#include<iostream>
using namespace std;
template<typename T>
T maximum(T a,T b)
{
	if(a>b)
	{
		cout<<"a is greater";
	}
	else{
		cout<<"b is greater";
	}
	
}
main(){
	cout<<maximum<int>(2,5)<<endl;
}
