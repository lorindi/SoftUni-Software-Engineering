package conditionalStatements;

import java.util.Scanner;

public class NumberFrom100To200 {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int num = Integer.parseInt(scan.nextLine());

        if (num > 200) {
            System.out.println("Greater than 200");
        } else if (num < 100){
            System.out.println("Less than 100");

        } else {
            System.out.println("Between 100 and 200");

        }
    }
}
