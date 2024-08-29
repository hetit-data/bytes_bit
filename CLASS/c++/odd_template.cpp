#include<iostream>
using namespace std;
template<typename T>
T even(T a)
{
	if(a%2==0)
	{
		cout<<"even";
	}
	else{
		cout<<"odd";
	}
}
main(){
	
	even<int>(3);
	
}
