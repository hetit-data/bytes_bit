#include<iostream>
using namespace std;
class rectangle{
	public:
	int length;
	int width;
input(){

	cout<<"enter length"<<endl;
	cin>>length;
	cout<<"enter width";
	cin>>width;
}
};
class area:public rectangle{
	public:
	fun(){
	
	cout<<"area is "<<length*width;
}
	
};
main(){
	area a;
a.input();
	a.fun();
	
}
