#include<iostream>
#include<string>
using namespace std;
class person{
	private:
	string name;
	int age;
	string country;
	
	public:
		set(string n,int a,string c)//method with para
		{
			name = n;
			age = a;
			country =c;
			
		}
		get(){
			cout<<"name is "<<name<<endl;
			cout<<"age is "<<age<<endl;
			cout<<"country is "<<country<<endl;
		}
	
};

main(){
	person p;
	p.set("het patel",19,"canada");//passing arguments
	p.get();
}
