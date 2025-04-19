package forLoop;

import java.util.Scanner;

public class NumbersN1 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = Integer.parseInt(scan.nextLine());
        for (int i = num; 1 <= i ; i--) {
            System.out.println(i);
        }
    }
}
