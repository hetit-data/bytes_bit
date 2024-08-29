#include<iostream>
using namespace std;
class cricketer{
	public:
	double total_runs;
    double average_runs;
    double performance;
};
class batsman:public cricketer{
	public:
		int sum;
		input(){
			cout<<"enter run for 5 innings"<<endl;
		    for(int i=1;i<=5;i++)
		    {
		    	cin>>total_runs;
			}
			sum+=total_runs;
		}
		average(){
			
			average_runs=sum/5;
			cout<<average_runs;
		}
		performance(){
			if(average_runs>500)
			{
				cout<<"excellent"<<endl;
			}
			else if(average_runs>400 && average_runs<500)
			{
				cout<<"good"<<endl;
			}
			else{
				cout<<"average performance";
				
			}
		}
		display(){
			input();
			average();
			performance();
		}
};
main(){
	batsman b;
	b.display();
}

