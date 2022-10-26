// Sanjeet
#include <iostream>
using namespace std;
int main ()
{
    int x,y;
    cout<<"ENTER 2 NUMBERS : "<<endl;
    cin>>x>>y;
    char operation;
    cout<<"ENTER OPERATION( + ,-,/ ,*) : ";
    cin >> operation ;
    switch (operation)
    {
        case '+' : cout << "sum of " << x << " and " << y << " is " << x+y;
        break;
        
        case '-' : cout << "diffrence  of " << x << " and " << y << " is " << x+y;
        break;
        
        case '*' : cout << "multiplication  of " << x << " and " << y << " is " << x+y;
        break;
        
        case '/' : cout << "division  of " << x << " and " << y << " is " << x+y;
        break;
        
        default : cout << " Syntax error !!";
    }
}