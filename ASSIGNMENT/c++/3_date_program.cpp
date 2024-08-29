
#include <iostream>

using namespace std;

class Date {
private:
    int day;
    int month;
    int year;

    bool isLeapYear(int year) {
 
        return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
    }

    bool isValidDate(int d, int m, int y) {
        if (m < 1 || m > 12) {
            return false; // Invalid month
        }

       
        int daysInMonth[] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (isLeapYear(y) && m == 2) {
            daysInMonth[2] = 29; // February has 29 days in a leap year
        }

        if (d < 1 || d > daysInMonth[m]) {
            return false; // Invalid day
        }

        return true;
    }

public:
    void setDate(int d, int m, int y) {
        if (isValidDate(d, m, y)) {
            day = d;
            month = m;
            year = y;
            cout << "Date is valid and set to: " << day << "/" << month << "/" << year << endl;
        } else {
            cout << "Invalid date" << endl;
        }
    }

 
    void inputYear() {
      

        if (isLeapYear(year)) {
            cout << "Leap year" << endl;
        } else {
            cout << "Not a leap year" << endl;
        }
    }

    void inputMonth() {
       
        if (month >= 1 && month <= 12) {
            cout << "Valid month" << endl;
        } else {
            cout << "Invalid month" << endl;
        }
    }

    void inputDay() {
        

        if (isValidDate(day, month, year)) {
            cout << "Valid day" << endl;
        } else {
            cout << "Invalid day" << endl;
        }
    }

    void printDate() const {
        cout << "Date: " << day << "/" << month << "/" << year << endl;
    }
};

int main() {
    Date myDate;
    int d, m, y;

    cout << "Enter day: ";
    cin >> d;
    cout << "Enter month: ";
    cin >> m;
    cout << "Enter year: ";
    cin >> y;

    myDate.setDate(d, m, y);
    myDate.inputYear();
    myDate.inputMonth();
    myDate.inputDay();
    myDate.printDate();

    return 0;
}

