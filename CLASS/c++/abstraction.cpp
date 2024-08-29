#include<iostream>
using namespace std;
class Test{
	public:
		virtual salary()=0;//pure virtual func is used for 0 value of func
};
class A:public Test{
	public:
		salary(){
			cout<<"from a class"<<endl;
			
		}
};
class B:public Test{
	public:
		salary(){
			cout<<"from b class"<<endl;
			
		}
};

main(){
	B obj;
	A obj1;
	obj.salary();
	obj1.salary();
	
}
