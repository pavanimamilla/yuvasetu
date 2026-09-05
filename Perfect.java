import java.util.Scanner;
class Ex1 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enter a number:");
        int n=sc.nextInt();
        int sum=0;
        int original=n;
        for(int i=1;i<n;i++)
        {
            if(n%i==0)
            {
                sum=sum+i;
            }
        }
        if(sum==original)
        {
            System.out.println("Is a perfect number");
        }
        else
        {
            System.out.println("is not a perfect number");
        }
    }
}