package forLoop;

import java.util.Scanner;

public class SumNumbers {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = Integer.parseInt(scan.nextLine());
        int sum = 0;
        for (int i = 1; i <= num; i++) {
            int currentNum = Integer.parseInt(scan.nextLine());
            sum += currentNum;
        }
        System.out.println(sum);
    }
}
