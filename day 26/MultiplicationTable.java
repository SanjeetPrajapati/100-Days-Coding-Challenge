//sanjeet
//multiplication table
import java.util.Scanner;
public class MultiplicationTable{
    public static void main(String []args){
        int num,multi;
        Scanner input = new Scanner (System.in);
        System.out.println("Enter the number : ");
        num=input.nextInt();
        System.out.println("multiplication of " + num);
        for(int i=1 ; i<=10 ; i++){
            System.out.println(num + " * " + i  + " = " + num*i);
        }
    }
}
