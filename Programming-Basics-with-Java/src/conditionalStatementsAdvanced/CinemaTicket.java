package conditionalStatementsAdvanced;

import java.util.Scanner;

public class CinemaTicket {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String day = scan.nextLine();
        int price = 0;

        if (day.equals("Monday") || day.equals("Tuesday") || day.equals("Friday")) {
            price = 12;
        } else if (day.equals("Wednesday") || day.equals("Thursday")) {
            price = 14;
        } else if (day.equals("Saturday") || day.equals("Sunday")) {
            price = 16;
        } else {
            System.out.println("Invalid day");
            return;
        }

        System.out.println(price);
    }
}
