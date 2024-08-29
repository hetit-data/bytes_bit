#include <iostream>
using namespace std;

class Circle {
private:
    double radius;

public:
    set(double r) {
        radius = r;
    }

 
    area() {
        return 3.14 * radius * radius;//area formula
    }


    circumference() {
        return 2 * 3.14 * radius;//circumference formula
    }

    display() {
        cout << "Circle with radius: " << radius << endl;
        cout << "Area: " << area() << endl;
        cout << "Circumference: " << circumference() << endl;
    }
};

int main() {
    Circle circle;
    double r;


    cout << "Enter the radius of the circle: ";
    cin >> r;

   
    circle.set(r);


    circle.display();

    return 0;
}

