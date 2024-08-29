#include<iostream>
using namespace std;
class Wheel{
	public:
		virtual color()=0;
		virtual tyre()=0;//pure virtual func is used for 0 value of func
};
class car:public Wheel{
	public:
		color(){
			cout<<"car of red color"<<endl;
			
		}
		tyre(){
			cout<<"car with 4 tyre"<<endl;
		}
};
class truck:public Wheel{
	public:
		color(){
			cout<<"truck of green color"<<endl;
			
		}
		tyre(){
			cout<<"truck with 6 tyre"<<endl;
		}
};
class bike:public Wheel{
	public:
		color(){
			cout<<"bike of red color"<<endl;
			
		}
		tyre(){
			cout<<"bike with 2 tyre"<<endl;
		}
};


main(){
	bike obj;
	car obj1;
	truck obj2;
	obj.color();
	obj.tyre();
	obj1.color();
	obj1.tyre();
	obj2.color();
	obj2.tyre();
	
	
}
