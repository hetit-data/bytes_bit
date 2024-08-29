#include <iostream>
using namespace std;

class Swap {
private:
    int a = 5, b = 6;

    // Declare friend function to allow access to private members
    friend void swapping(Swap&);

public:
    
    void display(){
        cout << "a = " << a << ", b = " << b << endl;
    }
};

// Friend function definition
void swapping(Swap& obj) {
   
    obj.a = obj.a + obj.b;
    obj.b = obj.a - obj.b;
    obj.a = obj.a - obj.b;
}

int main() {
    Swap obj;
    cout << "Before swapping: ";
    obj.display(); 

    swapping(obj);

    cout << "After swapping: ";
    obj.display(); // Display values after swap

    return 0;
}

