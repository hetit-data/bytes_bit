#include<iostream>
using namespace std;
template<typename T>
T swapping(T a,T b)
	{
		int c;
		c=a;
		a=b;
		b=c;
		cout<<a;
		cout<<b;
		
	}

main(){
	swapping<int>(5,6);
}
