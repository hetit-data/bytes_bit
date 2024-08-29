#include<iostream>
using namespace std;

class A
{
	public:
		int a,b;
		sum()
		{
			cout<<"Enter A: ";
			cin>>a;
			cout<<"Enter B: ";
			cin>>b;
			
			cout<<"Addition is: "<<a+b<<endl;
		}
		sub()
		{
			cout<<"Enter A: ";
			cin>>a;
			cout<<"Enter B: ";
			cin>>b;
			
			cout<<"Subtraction is: "<<a-b<<endl;
		}
		mul()
		{
			cout<<"Enter A: ";
			cin>>a;
			cout<<"Enter B: ";
			cin>>b;
			
			cout<<"Mul is: "<<a*b<<endl;
		}
		div()
		{
			cout<<"Enter A: ";
			cin>>a;
			cout<<"Enter B: ";
			cin>>b;
			
			cout<<"Div is: "<<a/b<<endl;
		}
};

main()
{
	A a;
	a.sum();
	a.sub();
	a.mul();
	a.div();
}
