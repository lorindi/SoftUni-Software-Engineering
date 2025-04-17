package conditionalStatements;

import java.util.Scanner;

public class ExcellentResult {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int firstNum = Integer.parseInt(scan.nextLine());
        int secondNum = Integer.parseInt(scan.nextLine());

        System.out.println(Math.max(firstNum, secondNum));

//        if (firstNum > secondNum) {
//            System.out.println(firstNum);
//        } else {
//            System.out.println(secondNum);
//
//        }
    }
}
