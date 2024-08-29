#include <iostream>
#include <string>
using namespace std;

class Bank {
public:
	//data members
    string depositorName;
    int accountNumber;
    string accountType;
    double balance;

public:
   //insert details
    void account_input() {
        cout << "Enter depositor name: ";
        getline(cin, depositorName); 

        cout << "Enter account number: ";
        cin >> accountNumber;

        cout << "Enter account type : ";
        cin >> accountType;

        cout << "Enter initial balance: ";
        cin >> balance;

        cout << "Account details set successfully." << endl;
    }
    //add money in account

    void deposit() {
    	double amount;
    	cout<<"enter amount to be deposited"<<endl;
    	cin>>amount;
        if (amount > 0) {
            balance += amount;
            cout << "Amount :" << amount << " deposited successfully." << endl;
        } else {
            cout << "Invalid deposit amount." << endl;
        }
    }
//substract money
    void withdraw() {
    		double amount;
    	cout<<"enter amount to withdraw"<<endl;
    	cin>>amount;
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            cout << "Amount :" << amount << " withdrawn successfully." << endl;
        } else {
            cout << "Insufficient balance or invalid withdrawal amount." << endl;
        }
    }

    void display() const {
        cout << "Depositor Name: " << depositorName << endl;
        cout << "Account Number: " << accountNumber << endl;
        cout << "Account Type: " << accountType << endl;
        cout << "Balance: $" << balance << endl;
    }
};

int main() {
    Bank account;

    account.account_input();

   
    account.display();

    account.deposit();

    account.withdraw();

    account.display();

    account.withdraw();

    return 0;
}

