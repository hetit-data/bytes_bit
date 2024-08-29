#include<iostream>
using namespace std;
class A {
	public:
	hello(){
		cout<<"hello form a";
	}
};
class B:public A{
	public:
		hy(){
		
		cout<<"from b";
}
};
class C:public A{
	public:
		fun2(){
			cout<<"from c";
			
		}
};
main(){
	C obj;
	B obj2;
	obj.hello();
	obj.fun2();
	obj2.hy();
	obj2.hello();
}
