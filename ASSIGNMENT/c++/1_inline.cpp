#include<iostream>

using namespace std;

class line{
	public:
	inline mul(float x,float y)//inline function
	{
		return x*y;
	}
	inline cub(float x)
	{
		return x*x;
	}
	
};
main(){
	line l;
	float val1,val2;
	cout<<"enter val 1  and val 2"<<endl;
	cin>>val1>>val2;
	
	cout<<"multiply "<<l.mul(val1,val2)<<endl;
	cout<<"cube is "<<l.cub(val1)<<endl<<l.cub(val2);
}
