#include<iostream>
using namespace std;
class A {
	protected:
		int a,b;
	A(){
		cout<<"hello form a";
	}
};
class B{
	public:
		fun1(){
		
		cout<<"from b";
}
};
class C:public A,public B{
	public:
		fun2(){
			cout<<"enter a ";
			cin>>a;
			cout<<"enter b ";
			cin>>b;
			cout<<a<<endl;
			cout<<b;
			
		}
};
main(){
	C obj;
	obj.fun1();
	obj.fun2();
}
