#include <iostream>
using namespace std;

class Max {
private:
    int a = 5, b = 6;

    friend void maximum(Max&);

public:
    // Method to display the values of a and b
    void display() {
        cout << "a = " << a << ", b = " << b << endl;
    }
};

// Friend function definition to find the maximum of a and b
void maximum(Max& obj) {
    if (obj.a > obj.b) {
        cout << "a is greater" << endl;
    } else if (obj.a < obj.b) {
        cout << "b is greater" << endl;
    } else {
        cout << "a and b are equal" << endl;
    }
}

int main() {
    Max obj;
    obj.display(); // Display initial values

    maximum(obj); 

    return 0;
}

