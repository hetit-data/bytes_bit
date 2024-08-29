#include<iostream>
using namespace std;
class a{
	public:
		a(){
			cout<<"hello from a";
		}
};
class b:public a{
	public:
		b(){
			cout<<"hello from b";
		}
};
class c:public b{
	public:
		c(){
			cout<<"from c";
		}
};
main(){
	c cc;
	
}
