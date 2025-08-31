package Arrays;
import java.util.Scanner;

public class DayOfWeek {

    private static String[] getDays() {
        return new String[]{
                "Monday", "Tuesday", "Wednesday",
                "Thursday", "Friday", "Saturday", "Sunday"
        };
    }

    private static String getDayName(int dayNumber, String[] days) {
        if (dayNumber >= 1 && dayNumber <= 7) {
            return days[dayNumber - 1];
        } else {
            return "Invalid day!";
        }
    }

    private static void print(String result) {
        System.out.println(result);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String[] days = getDays();
        int dayNumber = scanner.nextInt();

        String result = getDayName(dayNumber, days);
        print(result);
    }
}
