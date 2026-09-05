
import java.util.Scanner;
class Ex3 {
    static int factorial(int n)
    {
        int fact=1;
        for(int i=1;i<=n;i++)
        {
            fact*=i;
        }
        return fact;
    }
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enetr a number:");
        int n=sc.nextInt();
        int digit,sum=0,original=n;
        while(n>0)
        {
            digit=n%10;
            sum+=factorial(digit);
            n/=10;
        }
        if(original==sum)
        {
            System.out.println("Given number is a strong number");
        }
        else
        {
            System.out.println("Given number is not a strong number");
        }
    }
}