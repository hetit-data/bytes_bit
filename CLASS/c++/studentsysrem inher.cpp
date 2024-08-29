#include<iostream>
using namespace std;
class student{
	int total;
	int avg;
	public:
		int rollno;
		string name;
	   user(){
	   	cout<<"enter name ";
	   	cin>>name;
	   	cout<<"enter rollno";
	   	cin>>rollno;
	   	int maths=56;
		int science=67;
		int english=89;
		int gujarati=98;
		cout<<maths<<endl;
		cout<<science<<endl;
		cout<<english<<endl;
		cout<<gujarati<<endl;
		int total = maths+science+english+gujarati;
		int avg=total/4;
	   }
};
class marks:public student{
	public:
		int total;
		int avg;
		print(){
	
	    
		cout<<total;
	
		cout<<avg;
		
	}
};
class average:public marks{
	public:
		final(){
		user();
print();
		
	}
		
};





main(){
	average obj;

	obj.final();
	
	
}
