#include <iostream>
using namespace std;

class Overload {
public:
    int add(int a, int b) {//add
        return a + b;
    }

    float div(float a, float b) {//div
        if (b != 0) {
            return a / b;
        } else {
            cout << "Error: Division by zero!" << endl;
            return 0;
        }
    }
//multiply
    double mul(double a, double b) {
        return a * b;
    }
//substraction
    float sub(int a, float b) {
        return a - b;
    }
};

int main() {
    Overload o;//object to call function
    cout << "Addition: " << o.add(1, 2) << endl;
    cout << "Division: " << o.div(1.2, 4.5) << endl;
    cout << "Multiplication: " << o.mul(5, 6) << endl;
    cout << "Subtraction: " << o.sub(4, 2.0f) << endl;

    return 0;
}

