#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;//data member
    int roll;

    void inputDetails() {//input detail
        cout << "Enter name: ";
        getline(cin,name);
        cout << "Enter roll number: ";
        cin >> roll;
    }
};

class Marks {
public:
    int maths, sci, sanskrit, guj, english;

    void inputMarks() {
        cout << "Enter Maths marks: ";
        cin >> maths;
        cout << "Enter Science marks: ";
        cin >> sci;
        cout << "Enter Sanskrit marks: ";
        cin >> sanskrit;
        cout << "Enter Gujarati marks: ";
        cin >> guj;
        cout << "Enter English marks: ";
        cin >> english;
    }
};

class Final : public Student, public Marks {
public:
    void printMarksheet() {//display marksheet
        int total = maths + sci + sanskrit + guj + english;
        int average = total / 5;

        cout << "\nMarksheet" << endl;
        cout << "Name: " << name << endl;
        cout << "Roll Number: " << roll << endl;
        cout << "Marks in all subjects:" << endl;
        cout << "Maths: " << maths << endl;
        cout << "Science: " << sci << endl;
        cout << "Sanskrit: " << sanskrit << endl;
        cout << "Gujarati: " << guj << endl;
        cout << "English: " << english << endl;
        cout << "Total Marks: " << total << endl;
        cout << "Average Marks: " << average << endl;

        if (average > 85) {
            cout << "Grade: A" << endl;
        } else if (average > 65) {
            cout << "Grade: B" << endl;
        } else {
            cout << "Grade: C" << endl;
        }
    }
};

int main() {
    Final studentFinal;
    studentFinal.inputDetails();
    studentFinal.inputMarks();
    studentFinal.printMarksheet();

    return 0;
}

