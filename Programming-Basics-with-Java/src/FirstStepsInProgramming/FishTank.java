package FirstStepsInProgramming;

import java.util.Scanner;

public class FishTank {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int width = Integer.parseInt(scan.nextLine());
        int height = Integer.parseInt(scan.nextLine());
        int length = Integer.parseInt(scan.nextLine());
        double percentToRemove = Double.parseDouble(scan.nextLine());

        int volumeInSm = width * height * length;

        double volumeInLiters = volumeInSm / 1000.0;
        double percentToBeRemoved = volumeInLiters * (percentToRemove/100);

        volumeInLiters = volumeInLiters - percentToBeRemoved;


        System.out.println(volumeInLiters);
    }
}
