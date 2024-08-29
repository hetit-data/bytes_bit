#include<iostream>
using namespace std;
class calculator{
	int a,b;
	public:
		add(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"addition is "<<a+b<<endl;
			
		}
		sub(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"sub is "<<a-b<<endl;
			
		}
		mul(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"mul is "<<a*b<<endl;
			
		}
		div(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"division is "<<a/b<<endl;
			
		}
		mod(){
			cout<<"enter a"<<endl;
			cin>>a;
			cout<<"enter b"<<endl;
			cin>>b;
			cout<<"mod  is "<<a%b<<endl;
			
		}
	
		
};
main(){
	calculator c;
	int choice;


	while(true){
			cout<<"1.addition"<<endl;
	cout<<"2.substraction"<<endl;
	cout<<"3.multiply"<<endl;
	cout<<"4.division"<<endl;
	cout<<"5.modulo"<<endl;
	cout<<"6.exit"<<endl;
	cout<<"--- calc ------"<<endl;
	
	cout<<"enter choice "<<endl;
	cin>>choice;
	switch(choice){
case 1:c.add();
break;
case 2:c.sub();
break;
case 3:c.mul();
break;
case 4:c.div();
break;
case 5:c.mod();
break;
case 6:
break;
default:
	cout<<"invalid choice";
	}
}
}
