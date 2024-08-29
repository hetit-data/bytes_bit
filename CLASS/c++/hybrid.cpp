#include<iostream>
using namespace std;
class A {
	public:
	hello(){
		cout<<"hello form a"<<endl;
	}
};
class B:public A{
	public:
		hy(){
		
		cout<<"from b"<<endl;
}
};
class C{
	public:
		fun2(){
			cout<<"from c";
			
		}
};
class D :public B,public C{
	public:
	fun3(){
		cout<<"from d";
	}
};
main(){
D obj;

	obj.hello();
	obj.fun2();
	obj.hy();
    obj.fun3();
}
