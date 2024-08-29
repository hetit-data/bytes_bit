#include<iostream>
using namespace std;
class test{
	public:
		int a=10;
	private:
		int b=10;
	protected:
		int c=10;
		
};
class example:public test{
	public:
	fun(){
		cout<<a;
		cout<<b;
		cout<<c;
	}
};
main(){
	example e;
	e.fun();
	
}
