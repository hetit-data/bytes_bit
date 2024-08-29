#include <iostream>
using namespace std;

class A {
    private:
        int a[5];
        friend void array(A&);  

    
};
void array(A& obj) {
    int temp;
   
    for (int i = 0; i < 5; i++) {
        cout << "Enter element " << i + 1 << ": ";
        cin >> obj.a[i];
    }

    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (obj.a[i] > obj.a[j]) {
                temp = obj.a[i];
                obj.a[i] = obj.a[j];
                obj.a[j] = temp;
            }
        }
    }

    cout << "Sorted array: ";
    for (int i = 0; i < 5; i++) {
        cout << obj.a[i] << " ";
    }
    cout << endl;
}

int main() {
    A obj;
    array(obj);
    return 0;
}

