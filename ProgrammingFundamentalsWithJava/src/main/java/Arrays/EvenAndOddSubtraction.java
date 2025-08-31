package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class EvenAndOddSubtraction {

    private static int[] readArray(Scanner scanner) {
        return Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
    }

    private static int sumOfNums(int[] nums, boolean even) {
        return Arrays.stream(nums)
                .filter(num -> even ? num % 2 == 0 : num % 2 != 0)
                .sum();
    }


    private static int evenOddDifference(int[] nums) {
        int evenSum = sumOfNums(nums, true);
        int oddSum = sumOfNums(nums, false);
        return evenSum - oddSum;
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] nums = readArray(scanner);
        int result = evenOddDifference(nums);
        System.out.println(result);
    }
}
