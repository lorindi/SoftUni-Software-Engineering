package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class SumEvenNumbers {

    private static int[] readArray(Scanner scanner) {
        return Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
    }

    private static int sumEvenNumbers(int[] numbers) {
        return Arrays.stream(numbers)
                .filter(num -> num % 2 == 0)
                .sum();
    }

    private static void print(int result) {
        System.out.println(result);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = readArray(scanner);
        int sum = sumEvenNumbers(numbers);
        print(sum);
    }
}
