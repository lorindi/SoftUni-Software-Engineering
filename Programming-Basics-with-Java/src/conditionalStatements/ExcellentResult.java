package conditionalStatements;

import java.util.Scanner;

public class ExcellentResult {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        int grade = Integer.parseInt(scan.nextLine());

        if (grade >= 5) {
            System.out.println("Excellent!");
        }
    }
}
