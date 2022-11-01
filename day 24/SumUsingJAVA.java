//SAnjeEt
//sum of 2 numbers using java
import java.util.Scanner;
public class SumUsingJAVA{
    public static void main(String [] args){
        int first,second,sum;
        Scanner input= new Scanner(System.in);
        System.out.println("Enter the  first number :");
        first=input.nextInt();
        System.out.println("Enter the  Second number :");
        second=input.nextInt();
        sum= first + second;
        System.out.println("sum of " + first + " and " + second + " is : " +sum );
        input.close();
        
    }
}