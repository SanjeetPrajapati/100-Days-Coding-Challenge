//SANJEET
//Swapping two numbers
#include <iostream>
using namespace std;
int main(){
    int a=10,b=20,temp;
    cout<<"a is "<<a <<" b is "<< b <<endl;
    temp=a;
    a=b;
    b=temp;
    cout<< "After swapping \n";
    cout<<"a is "<<a<<" b is " << b;
    return 0;
}