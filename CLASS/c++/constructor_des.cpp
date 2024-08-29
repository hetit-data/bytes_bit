#include<iostream>
using namespace std;
class Hello{
	public:
	Hello(){
		
		cout<<"hy hello";
	}
	prime(){
		int a,c;
		cout<<"enter a number ";
		cin>>a;
		for(int i=1;i<=a;i++)
		{
			if(a%i==0)
			{
				c++;
			}
			
		}
		if(c==2)
		{
			cout<<"prime";
		}
		else{
			cout<<"not prime ";
		}
	}
	
	~Hello(){
		
		cout<<"hy hello";
	}
	
};
main(){
	Hello h;
	h.prime();
}
