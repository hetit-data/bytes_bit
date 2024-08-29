#include<iostream>
using namespace std;
class myclass{
	public:
		int a,b;
		myfun1(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"addition is "<<a+b;
			
		}
		myfun2(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"sub is "<<a-b;
			
		}
		myfun3(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"mul is "<<a*b;
			
		}
		
		
};

main(){
	myclass m;
	m.myfun1();
	m.myfun2();
	m.myfun3();
	
	
}
