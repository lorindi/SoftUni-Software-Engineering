package conditionalStatementsAdvanced;

import java.util.Scanner;

public class TradeCommissions {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String city = scanner.nextLine();
        double sales = Double.parseDouble(scanner.nextLine());

        if (sales < 0 || !(city.equals("Sofia") || city.equals("Varna") || city.equals("Plovdiv"))) {
            System.out.println("error");
            return;
        }

        double commission = 0;

        if (city.equals("Sofia")) {
            if (sales <= 500) {
                commission = sales * 0.05;
            } else if (sales <= 1000) {
                commission = sales * 0.07;
            } else if (sales <= 10000) {
                commission = sales * 0.08;
            } else {
                commission = sales * 0.12;
            }
        } else if (city.equals("Varna")) {
            if (sales <= 500) {
                commission = sales * 0.045;
            } else if (sales <= 1000) {
                commission = sales * 0.075;
            } else if (sales <= 10000) {
                commission = sales * 0.10;
            } else {
                commission = sales * 0.13;
            }
        } else {
            if (sales <= 500) {
                commission = sales * 0.055;
            } else if (sales <= 1000) {
                commission = sales * 0.08;
            } else if (sales <= 10000) {
                commission = sales * 0.12;
            } else {
                commission = sales * 0.145;
            }
        }

        System.out.printf("%.2f", commission);
    }
}
