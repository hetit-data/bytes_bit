#include<iostream>
#include<string>
using namespace std;
class bank{
	private:
double account_number;
double balance;
	
	public:
		set(double a,double b)//method with para
		{
			account_number = a;
			balance = b;
		}
	  void deposit() {
    	double amount;
    	cout<<"account number is "<<account_number;
    	
    	
    	cout<<"balance  is "<<balance;
    	cout<<"enter amount to be deposited"<<endl;
    	cin>>amount;
        if (amount > 0) {
            balance += amount;
            cout << "Amount :" << amount << " deposited successfully." << endl;
        } else {
            cout << "Invalid deposit amount." << endl;
        }
        
        cout<<"balance "<< balance;
    }
//substract money
    void withdraw() {
    		double amount;
    		
    	cout<<"account number is "<<account_number;
    	
    	cout<<"balance is "<<balance;
    	cout<<"enter amount to withdraw"<<endl;
    	cin>>amount;
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Amount :" << amount << " withdrawn successfully." << endl;
        } else {
            cout << "Insufficient balance or invalid withdrawal amount." << endl;
        }
        
        cout<<"balance "<< balance;
    }
	
};

main(){
	bank b;
	b.set(123456,19000);//passing arguments
	b.deposit();
	b.withdraw();
}
