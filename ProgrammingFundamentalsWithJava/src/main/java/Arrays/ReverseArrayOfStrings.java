package Arrays;

import java.util.Scanner;

public class ReverseArrayOfStrings {

    private static String[] readArray(Scanner scanner) {
        return scanner.nextLine().split(" ");
    }

    private static void reverseArray(String[] array) {
        int n = array.length;
        for (int i = 0; i < n / 2; i++) {
            String temp = array[i];
            array[i] = array[n - 1 - i];
            array[n - 1 - i] = temp;
        }
    }

    private static void print(String[] array) {
        System.out.println(String.join(" ", array));
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] arrayStrings = readArray(scanner);
        reverseArray(arrayStrings);
        print(arrayStrings);
    }
}
