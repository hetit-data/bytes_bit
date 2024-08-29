#include<iostream>
using namespace std;
class A{
	public:
	A(int n){
		int fact=1,i;
		for(i=1;i<=n;i++)
		{
			fact*=i;
		}
		cout<<fact;
	}
};
main(){
	
	A obj(5);
}
