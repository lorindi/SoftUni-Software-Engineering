package Arrays;

import java.util.Arrays;
import java.util.Scanner;

public class EqualArrays {

    private static int[] readArray(Scanner scanner) {
        return Arrays.stream(scanner.nextLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
    }

    private static int findDifferenceIndex(int[] arr1, int[] arr2) {
        if (arr1.length != arr2.length) {
            return Math.min(arr1.length, arr2.length);
        }
        for (int i = 0; i < arr1.length; i++) {
            if (arr1[i] != arr2[i]) {
                return i;
            }
        }
        return -1;
    }

    private static int sumArray(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num;
        }
        return sum;
    }

    private static void print(int diffIndex, int[] arr1) {
        if (diffIndex == -1) {
            int sum = sumArray(arr1);
            System.out.println("Arrays are identical. Sum: " + sum);
        } else {
            System.out.println("Arrays are not identical. Found difference at " + diffIndex + " index.");
        }
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int[] arr1 = readArray(scanner);
        int[] arr2 = readArray(scanner);

        int diffIndex = findDifferenceIndex(arr1, arr2);

        print(diffIndex, arr1);
    }
}
