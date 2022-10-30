//Sanjeet 
#include <iostream>
using namespace std;
class Sanjeet //class
{ 
    public:
    int n;
    int print() //inside method
    { 
        int n;
        cout<<"Enter the number : " ;
        cin>> n;
        while(n!=0){
            cout<<"I am best " <<endl;
            n--;
        }
    }
};
    int main(){
        Sanjeet quote; //object
        quote.print(); //calling method
        
    }
    