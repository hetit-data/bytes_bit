#include<iostream>
using namespace std;

class A{
	public:
		int id;
		string name;
	    getname(string name)
	    {
	    	this->name = name; 
		}
		setname()
		{
			cout<<"name :"<<this->name <<endl;
		}
		getid(int id)
		{
			this->id = id; 
		}
		setid()
		{
			cout<<"id :"<<this->id;
		}
};

main()
{
	A obj;
	obj.getname("Roman");
	obj.setname();
	obj.getid(15);
	obj.setid();
}
