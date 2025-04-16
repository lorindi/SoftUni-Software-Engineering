package FirstStepsInProgramming;

import java.util.Scanner;

public class Demo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String scanerName = scanner.nextLine();
        System.out.println(scanerName);

        int scanerNumber = Integer.parseInt(scanner.nextLine());
        System.out.println(scanerNumber);

        String name = "Lora";
        int number = 1;
        double num = 10.5;

        System.out.println(name);
        System.out.println(number);
        System.out.println(num);

    }

}
