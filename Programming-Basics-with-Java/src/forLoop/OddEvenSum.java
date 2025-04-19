package forLoop;

import java.util.Scanner;

public class OddEvenSum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());
        int evenSum = 0;
        int oddSum = 0;

        for (int i = 0; i < n; i++) {
            int currentNum = Integer.parseInt(scan.nextLine());


            if (i % 2 == 0) {
                evenSum += currentNum;
            } else {
                oddSum += currentNum;
            }
        }

        if (evenSum == oddSum) {
            System.out.println("Yes");
            System.out.printf("Sum = %d%n", evenSum);
        } else {
            System.out.println("No");
            System.out.printf("Diff = %d%n", Math.abs(evenSum - oddSum));
        }
    }
}
//4
//10
//50
//60
//20