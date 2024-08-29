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
main(){
	b obj;
	obj.fun();
	obj.fun1();
	
}
