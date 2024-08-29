#include<iostream>
using namespace std;
class image{
	public:
		int height;
		int width;
		image(int h=0,int w=0)
		{
			height =h;
			width=w;
			
		}
		image operator -(image const &obj)
		{
			image result;
			result.height=height-obj.height;
			result.width=width-obj.width;
			return result;
			
		}
		print(){
			cout<<height<<endl;
			cout<<width;
			
		}
};
main(){
	image i1(100,200);
	image i2(200,300);
	
	image i3=i1-i2;
	i3.print();
	
}
