package FirstStepsInProgramming;

import java.util.Scanner;

public class DepositCalculator {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        double depositSum = Double.parseDouble(scan.nextLine());
        int depositDue = Integer.parseInt(scan.nextLine());
        double annualPercent = Double.parseDouble(scan.nextLine());

        double monthlyInterest = (depositSum * (annualPercent /100)) / 12;
        double sum = depositSum + depositDue * monthlyInterest;

        System.out.println(sum);
    }
}
