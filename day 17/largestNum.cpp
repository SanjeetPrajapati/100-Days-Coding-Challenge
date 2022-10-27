//SANJEET
//Largest of numbers
#include <iostream>
using namespace std;
int main(){
    int n,temp=0;
    
    cout<<" enter number of numbers that you sant to check : ";
    cin>> n;
    int m[ n];
    for(int i=0;i<n ; i++)
    {
        cout<< "Enter number " << i+1<< " : ";
        cin>>m[i];
        if(m[i] > temp )
        {
            temp=m[i];
        }
    }
    cout<< " Largest number is " << temp ;
    return 0;
}