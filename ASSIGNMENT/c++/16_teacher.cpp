
#include<iostream>
#include<string>
using namespace std;
class person{
	public:
		string name;
		int age;
		fun(){
			cout<<"enter the name "<<endl;
		getline(cin,name);
		cout<<"enter the age "<<endl;
		cin>>age;
		}
};
class student{
	public:
	float percentage;
	fun2(){
	cout<<"enter the percentage "<<endl;
		cin>>percentage;	
	}
};
class teacher:public person,public student{
	public:
	int salary;
	fun3(){
	
		
		cout<<"enter the salary "<<endl;
		cin>>salary;
	
		
	}
	read(){
		
	cout<<"name is "<<name<<endl;
	
		cout<<"age is "<<age<<endl;
		
	cout<<"salary is "<<salary<<endl;
		cout<<" percentage "<<percentage<<endl;
	}
	
	
};
main(){
	teacher t;
	t.fun();
	t.fun2();
	t.fun3();
	t.read();
}
