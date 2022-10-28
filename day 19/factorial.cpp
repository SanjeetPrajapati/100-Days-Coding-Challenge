//SANJEET
//Factorial of a number
#include <iostream>
using namespace std;
int main(){
    cout<< "SANJEET \n";
    int n , fact=1;
    cout<< "Enter a number to find factorial : ";
    cin>>n;
    
    for(int i=n; i>0; i--)
    {
        
        fact=fact*i;
       
    }
    cout<< " Factorial of  " << n << "  is : " << fact;
    return 0;
    
}