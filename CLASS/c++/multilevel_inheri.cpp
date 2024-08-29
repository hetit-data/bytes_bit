#include<iostream>
using namespace std;
class a{
	public:
		fun(){
			cout<<"Hello";
		}
};
class b:public a{
	public:
		fun1(){
			cout<<"hy";
		}
};
class c:public b{
	public:
		fun2(){
			cout<<"by";
		}
};




main(){
	c obj;
	obj.fun();
	obj.fun1();
	obj.fun2();
	
	
}
