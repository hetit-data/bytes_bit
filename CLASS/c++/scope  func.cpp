#include<iostream>
using namespace std;

class A{
	public:
		fun1()
		{
			cout<<"Hello"<<endl;
		}
};

class B{
	public:
		fun1()
		{
			cout<<"welcome"<<endl;
		}
};

class C:public A,public B{
	public:
		fun1()
		{
			A::fun1();
			B::fun1();
			cout<<"This is Class";
		}
};

main()
{
	C obj;
	obj.fun1();
	
}
