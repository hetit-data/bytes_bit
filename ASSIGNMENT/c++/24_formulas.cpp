#include <iostream>
using namespace std;

class Formulas {
public:
    // Calculate the area of a rectangle
    int rectangle(int length, int width) {
        return length * width;
    }

    // Calculate the area of a triangle
    float triangle(float base, float height) {
        return 0.5 * base * height;
    }

    // Calculate the area of a circle
    float circle(float radius) {
        return 3.14 * radius * radius;
    }
};

int main() {
    Formulas f;
//passing args
    int rectArea = f.rectangle(1, 2);
    float triArea = f.triangle(3.0, 4.5);
    float circArea = f.circle(7.6);

    cout << "Area of Rectangle: " << rectArea << endl;
    cout << "Area of Triangle: " << triArea << endl;
    cout << "Area of Circle: " << circArea << endl;

    return 0;
}

