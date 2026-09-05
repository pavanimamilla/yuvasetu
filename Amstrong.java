

import java.util.Scanner;
class Ex2 {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        System.out.println("Enetr a number:");
        int n=sc.nextInt();
        int digits=0,sum=0,original=n;
        while(n>0)
        {
            digits++;
            n/=10;
        }
          n=original;
        while(n>0)
        {
          int  digit=n%10;
          sum+=(int) Math.pow(digit,digits);
          n/=10;
        }
        if(original==sum)
        {
            System.out.println("Given number is a amstrong");
        }
        else
        {
            System.out.println("Given number is not a amstrong number");
        }
    }
}