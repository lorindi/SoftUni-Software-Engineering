package conditionalStatements;

import java.util.Scanner;

public class AreaOfFigures {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String figure = scan.nextLine();
        double num = Double.parseDouble(scan.nextLine());
        double result = 0;

        if (figure.equals("square")) {
            result = num * num;
        } else if (figure.equals("rectangle")) {
            double secondNum = Double.parseDouble(scan.nextLine());
            result = num * secondNum;
        } else if (figure.equals("circle")) {
            result = Math.PI * num * num;
        } else if (figure.equals("triangle")) {
            double height = Double.parseDouble(scan.nextLine());
            result = (num * height) / 2;
        } else {
            System.out.println("Unknown figure");
            return;
        }

        System.out.printf("%.3f%n", result);
    }
}
