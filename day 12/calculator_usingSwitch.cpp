// SANJEET
#include <iostream>
using namespace std;
int main() {
    char syntax;
    int a , b;
    cout << "ENTER OPERATE ( + ,-,*,/)   : ";
    cin >> syntax;
    cout << "ENTER FIRST NUMBER : ";
    cin >> a;
    cout << "ENTER FIRST NUMBER : ";
    cin >> b;
    switch (syntax)
    {
        case '+' : cout << "SUM OF " << a << " AND "<< b <<" IS : " << a+b;
        case '-' : cout << "SUM OF " << a << " AND "<< b <<" IS : " << a-b;
        case '*' : cout << "SUM OF " << a << " AND "<< b <<" IS : " << a*b;
        case '/' : cout << "SUM OF " << a << " AND "<< b <<" IS : " << a/b;
        default : cout<< "Syntax Error!!";
    }
    
    return 0;
}