#include<iostream>
using namespace  std;
class A{
	private:
		int array[5];
		friend class B;
		
};
class B{
	public:
		int i;
		fun1(A& a)
		{
			
			cout<<"enter elements"<<endl;
			for(i=0;i<5;i++)
			{
				cin>>a.array[i];
			}
				for(i=0;i<5;i++)
			{
				cout<<a.array[i]<<endl;
			}
			
		
		}
};
main(){
	B obj;
	A obj1;
	obj.fun1(obj1);
	
}
