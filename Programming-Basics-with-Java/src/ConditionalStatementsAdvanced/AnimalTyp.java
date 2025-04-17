package conditionalStatementsAdvanced;

import java.util.Scanner;

public class AnimalTyp {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String day = scan.nextLine();

        switch (day) {
            case "crocodile":
            case "tortoise":
            case "snake":
                System.out.println("reptile");
                break;
            case "dog":
                System.out.println("mammal");
                break;
            default:
                System.out.println("unknown");
                break;
        }
    }
}
