package FirstStepsInProgramming;

import java.util.Scanner;

public class SuppliesForSchool {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int pensCount = Integer.parseInt(scan.nextLine());
        int markersCount = Integer.parseInt(scan.nextLine());
        int detergentLiters = Integer.parseInt(scan.nextLine());
        int percentDiscount = Integer.parseInt(scan.nextLine());

        double pensPrice = pensCount * 5.80;
        double markersPrice = markersCount * 7.20;
        double detergentPrice = detergentLiters * 1.20;

        double totalSum = pensPrice + markersPrice + detergentPrice;
        double finalSum = totalSum - (totalSum * (percentDiscount / 100.0));

        System.out.println(finalSum);
    }
}
