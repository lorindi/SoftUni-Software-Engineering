package firstStepsInProgramming;

import java.util.Scanner;

public class VacationBooksList {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int pageCount = Integer.parseInt(scan.nextLine());
        int pagesPerHour = Integer.parseInt(scan.nextLine());
        int daysCount = Integer.parseInt(scan.nextLine());


        int allHoursToRead = pageCount / pagesPerHour;
        int hoursPerDay = allHoursToRead / daysCount;


        System.out.println(hoursPerDay);
    }
}
