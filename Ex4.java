
import java.util.Scanner;
class Ex4 {
    public static void main(String[] args) {
        int a=0;
         int b=1;
         Scanner sc=new Scanner(System.in);
         System.out.println("Enter a number:");
         int n=sc.nextInt();
        for(int i=1;i<=n;i++)
        {
        System.out.println(a+"");
        int c=a+b;
          a=b;
          b=c;
        }
    }
}