//Sanjeet
#include <iostream>
#include <string>
using namespace std;
class Sanjeet{
    public:
    int num;
    string car;
};
int main (){
    Sanjeet name;//name object
    name.num=2;
    
    name.car="Rolls-Royce";
    
    cout<<name.num<<endl;
    cout<<name.car;
}