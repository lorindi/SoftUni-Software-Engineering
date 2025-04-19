package forLoop;

import java.util.Scanner;

public class LeftAndRightSum {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int n = Integer.parseInt(scan.nextLine());
        int leftSum = 0;
        int rightSum = 0;

        for (int i = 0; i < n; i++) {
            int currentNum = Integer.parseInt(scan.nextLine());
            leftSum += currentNum;
        }
        for (int i = 0; i < n; i++) {
            int currentNum = Integer.parseInt(scan.nextLine());
            rightSum += currentNum;
        }


        String result = (leftSum == rightSum)
                ? "Yes, sum = " + leftSum
                : "No, diff = " + Math.abs(leftSum - rightSum);

        System.out.println(result);
    }
}
//2
//10
//90
//60
//40

//2
//10
//90
//60
//40