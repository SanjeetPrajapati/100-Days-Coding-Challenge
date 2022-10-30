// Factorial using outside method cpp
#include <iostream>
using namespace std;
class Sanjeet //class
{ 
    public:
    int fact;
    int Factorial(int fact);
  
    
};
int Sanjeet::Factorial(int fact) //FOR oustside method dont for ('::') double colun 
{
    if (fact>=1)
        return fact*Factorial(fact-1);
    else
        return 1;
    // return fact*Factorial(fact-1);
}
int main()
{
    Sanjeet num; //object
    cout<<"enter the number : ";
    cin>>num.fact;
    cout<< num.Factorial(num.fact);
}
    