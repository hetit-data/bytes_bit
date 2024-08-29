#include <iostream>
#include <string>
using namespace std;

class Employee {
private:
    string name;
    int id;
    double salary;

public:
    Employee(string n, int i, double s) {
	name=n;
	id=i;
	salary =s;
	
	}

    void adjust(double rating) {
        if (rating >= 4.5) {
            salary += salary * 0.20;
            cout << "Salary increased by 20%." << endl;
        } else if (rating >= 3.0) {
            salary += salary * 0.10;
            cout << " Salary increased by 10%." << endl;
        } else if (rating >= 2.0) {
            salary += salary * 0.05;
            cout << " Salary increased by 5%." << endl;
        } else {
            cout << " No salary increase." << endl;
        }
    }

display() {
        cout << "Name: " << name << endl;
        cout << "ID: " << id << endl;
        cout << "Salary: $" << salary << endl;
    }
};

int main() {
    string name;
    int id;
    double salary, rating;

    cout << "Enter name: ";
    getline(cin, name);
    cout << "Enter ID: ";
    cin >> id;
    cout << "Enter salary: ";
    cin >> salary;

    Employee emp(name, id, salary);

    cout << "Enter performance rating (1 to 5): ";
    cin >> rating;

    emp.adjust(rating);
    emp.display();

    return 0;
}

