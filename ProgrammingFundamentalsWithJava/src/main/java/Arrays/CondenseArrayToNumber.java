package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class CondenseArrayToNumber {

    private static int[] readArray(Scanner scanner) {
        return Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
    }

    private static int[] condenseOnce(int[] nums) {
        int[] condensed = new int[nums.length - 1];
        for (int i = 0; i < condensed.length; i++) {
            condensed[i] = nums[i] + nums[i + 1];
        }
        return condensed;
    }

    private static int condenseToNumber(int[] nums) {
        while (nums.length > 1) {
            nums = condenseOnce(nums);
        }
        return nums[0];
    }

    private static void print(int result) {
        System.out.println(result);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] numbers = readArray(scanner);
        int result = condenseToNumber(numbers);
        print(result);
    }
}
