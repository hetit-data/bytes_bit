#include <iostream>
using namespace std;

// Template function to swap two values
template <typename T>
void swapValues(T& a, T& b) {
    T temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 5, y = 10;
    char c1 = 'X', c2 = 'Y';

    cout << "Before swapping:" << endl;
    cout << "x = " << x << ", y = " << y << endl;
    cout << "c1 = " << c1 << ", c2 = " << c2 << endl;

    // Swap integer values
    swapValues(x, y);
    // Swap character values
    swapValues(c1, c2);

    cout << "\nAfter swapping:" << endl;
    cout << "x = " << x << ", y = " << y << endl;
    cout << "c1 = " << c1 << ", c2 = " << c2 << endl;

    return 0;
}

