//SAnjeeT
import java.util.Scanner;
public class FailPass{
    public static void main(String []args){
        int grade;
        Scanner scan = new Scanner(System.in);
        System.out.println("Enter your grade : ");
        grade = scan.nextInt();
        if(grade>40 && grade<=100){
            System.out.println("PASS !");
        }
        else if(grade<= 40 && grade >=0 ) {
            System.out.println("FAIL !");
        }
        else{
            System.out.println("invalid GRADE !");
        }
    }
}