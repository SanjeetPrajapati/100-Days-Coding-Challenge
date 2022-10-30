//Sanjeet
// Method outside  class
#include <iostream>
using namespace std;
class Sanjeet //class
{ 
    public:
    int n;
    int Factorial(); 
  
    
};
int Sanjeet::Factorial() //FOR oustside method dont for ('::') double colun 
{
    int n;
    cout<<"Enter the number : " ;
    cin>> n;
    while(n!=0){
        cout<<"Believe in yourself  " <<endl;
        n--;
    }
}
int main()
{
    Sanjeet quote;
    quote.Factorial();
}
    