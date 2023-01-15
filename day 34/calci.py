# Calci using pyhton
# sanjeet
a = int( input("Enter first number : "));
b = int(input("Enter Second number : "));
print("Select operation +,-,/,*")
op = input("operation : ")
if (op == '+'):
    print("sum is ", a+b)

elif (op == '-') :
    print("dif... is ", a-b)


elif (op == '/'):
    print("div... is ", a/b)


elif (op == '*'):
    print("multi... is ", a*b)

else :
    print("Invalid syntax !")