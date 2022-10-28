//SANJEET
//Sum of numbers
#include <iostream>
using namespace std;
int main(){
    cout<< "SANJEET \n";
    int n,sum=0;
    cout<< "How many number's you want to add? \n";
    cin>>n;
    int num[n];
    for(int i=0; i<n; i++)
    {
        cout<<"enter no. " << i+1 << " : ";
        cin>>num[i];
        sum=sum+num[i];
    }
    cout<< " sum of all " << n << " number is : " << sum;
    return 0;
    
}