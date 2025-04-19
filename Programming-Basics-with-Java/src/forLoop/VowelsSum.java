package forLoop;

import java.util.Scanner;

public class VowelsSum {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String text = scanner.nextLine().toLowerCase();

        int counter = 0;

        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);

            switch (ch) {
                case 'a':
                    counter += 1;
                    break;
                case 'e':
                    counter += 2;
                    break;
                case 'i':
                    counter += 3;
                    break;
                case 'o':
                    counter += 4;
                    break;
                case 'u':
                    counter += 5;
                    break;
            }
        }

        System.out.println(counter);
    }
}
