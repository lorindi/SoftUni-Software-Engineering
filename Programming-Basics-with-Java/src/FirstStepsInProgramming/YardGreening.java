package FirstStepsInProgramming;

import java.util.Scanner;

public class YardGreening {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        double allSqM = Double.parseDouble(scanner.nextLine());
        double amount = allSqM * 7.61;
        double discount = amount * 0.18;
        double finalPrice = amount - discount;
        System.out.println("The final price is:" + finalPrice);
        System.out.println("The discount is:" + discount);

    }
}
