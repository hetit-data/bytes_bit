#include<iostream>
using namespace std;
class A {
	public:
		fun1(int a){
			cout<<"hello a ";
		}
		fun1(){
			cout<<"hello empty ";
		}
		fun1(string a){
			cout<<"hello string ";
		}
		
		
};
main(){
	A obj;
	obj.fun1(10);
	obj.fun1();
	obj.fun1("hello");
}
