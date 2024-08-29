#include <iostream>
using namespace std;

class Calculator {
public:
    int a, b;

    // Constructor to initialize values
    Calculator() {
        cout << "Enter a: ";
        cin >> a;
        cout << "Enter b: ";
        cin >> b;
    }

    // Function to add the numbers
    void add() {
        cout << "Addition is " << a + b << endl;
    }

    // Function to subtract the numbers
    void sub() {
        cout << "Subtraction is " << a - b << endl;
    }

    // Function to divide the numbers
    void div() {
        if (b != 0) {
            cout << "Division is " << a / b << endl;
        } else {
            cout << "Error: Division by zero is undefined!" << endl;
        }
    }

    // Function to multiply the numbers
    void mul() {
        cout << "Multiplication is " << a * b << endl;
    }
};

int main() {
    Calculator c;
    c.add();
    c.sub();
    c.mul();
    c.div();

    return 0;
}

