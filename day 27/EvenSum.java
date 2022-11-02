//Sanjeet
import java.util.Scanner;
public class EvenSum {
    public static void main(String[] args) {
        int n,sum=0, i=2;
        Scanner input = new Scanner(System.in);
        System.out.println("Enter the number till you want add even num : ");
        n = input.nextInt();
        System.out.println("EVEN numbers : ");
        
        do{
            sum= sum+i;
            System.out.println(i+"\n");
            
            i=i+2;
        } while(i<=n);
        System.out.println("sum of even number till " + n + " is : ");
        
        System.out.println(sum);
        
    }
}