#include<iostream>
using namespace std;
class rectangle{
	private:
		int length;
		int width;
    public:
    	set(int l , int w)//method with parameter to acess private data members
    	{
    		length=l;
    		width=w;
		}
		
		
		area(){
			cout<<"enter length for area"<<endl;
			cin>>length;
			cout<<"enter width for area"<<endl;
			cin>>width;
			cout<<"area is "<<length*width;//area formula 
			
		}
        perimeter(){
            cout<<"enter length for perimeter"<<endl;
			cin>>length;
			cout<<"enter width for perimeter"<<endl;
			cin>>width;
			cout<<"perimeter is "<<(2*length)+(2*width);//perimeter formula
		}
		display(){
			area();
			perimeter();
			
		}
};
main(){
	rectangle r;
	r.display();
	
}
