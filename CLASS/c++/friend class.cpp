#include<iostream>
using namespace  std;
class A{
	private:
		int a,b;
		friend class B;
		
};
class B{
	public:
		fun1(A& a)
		{
			cout<<"enter a"<<endl;
			cin>>a.a;
			
			cout<<"enter b"<<endl;
			cin>>a.b;
			
		}
};
main(){
	B obj;
	A obj1;
	obj.fun1(obj1);
	
}
