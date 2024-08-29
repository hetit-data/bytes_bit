#include<iostream>
using namespace std;
class test{
	public:
		int x,y;
		test(int a,int b)
		{
			x=a;
			y=b;
			cout<<a<<endl;
			cout<<b<<endl;
		}
		test(test &t)
		{
			x=t.x;
			y=t.y;
			//copy
			cout<<x<<endl;
			cout<<y<<endl;
			
		}
};
main(){
	test obj(1,2);
	test obj1(obj);
}
