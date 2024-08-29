#include<iostream>
#include<string>
using namespace std;
class car{
	private:
	string company;
	int model;
	int year;
	
	public:
		set(string c,int m,int y)//method with para
		{
			company = c;
			model = m;
			year =y;
			
		}
		get(){
			cout<<"company of car  is "<<company<<endl;
			cout<<"model is "<<model<<endl;
			cout<<"year is "<<year<<endl;
		}
	
};

main(){
	car p;
	p.set("honda",123,2020);//passing arguments
	p.get();
}
