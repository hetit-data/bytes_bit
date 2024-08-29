#include <iostream>
using namespace std;

class Triangle { // Define a class named Triangle
  private: 
    double side1; // Private member variable to store sides of the triangle
    double side2; 
    double side3; 

  public:
   
    Triangle(double s1, double s2, double s3){
	side1=s1;
	side2=s2;
	side3=s3;
	
	}

    // Member function to determine the type of the triangle
    void determineType() {
      if (side1 == side2 && side2 == side3) { 
        cout << "Equilateral Triangle" <<endl; 
      } 
	  else if (side1 == side2 || side1 == side3 || side2 == side3) { 
        cout << "Isosceles Triangle" << endl;    
		  } 
		  else {
        cout << "Scalene Triangle" << endl; 
      }
    }
};

int main() {

  double s1, s2, s3; // Define variables for side lengths
  cout << "Input the lengths of the three sides of the triangle:\n"; 
  cout << "Side1: ";
  cin >> s1;
  cout << "Side2: ";
  cin >> s2; 
  cout << "Side3: ";
  cin >> s3; 

  Triangle triangle(s1, s2, s3);

  triangle.determineType(); 

  return 0; 
}

