package FirstStepsInProgramming;

import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int annualFee = Integer.parseInt(scan.nextLine());

        double sneakersPrice = annualFee - (annualFee * 0.40);
        double setPrice = sneakersPrice - (sneakersPrice * 0.20);
        double ballPrice = setPrice * 1/4;
        double accPrice = ballPrice * 1/5;

        double totalSum = sneakersPrice + setPrice + ballPrice + accPrice + annualFee;


        System.out.println(totalSum);
    }
}
