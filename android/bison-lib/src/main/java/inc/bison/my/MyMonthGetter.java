package inc.bison.my;

/**
 * Created by Clark on 10/24/2014.
 */
public class MyMonthGetter {

    public MyMonthGetter() {

    }//end constructor

    //-- Convert month integer to String
    public String monthToString(int monthNumber) {
        String month = null;

        //-- Assign value to String month based on monthNumber
        switch(monthNumber) {

            //-- Month integer of DatePicker object ranges from 0 to 11
            case 0:
                month = "January";
                break;
            case 1:
                month = "February";
                break;
            case 2:
                month = "March";
                break;
            case 3:
                month = "April";
                break;
            case 4:
                month = "May";
                break;
            case 5:
                month = "June";
                break;
            case 6:
                month = "July";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "October";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "December";
                break;
        }//end switch

        return month;

    }//end monthToString()

}//end MyMonthGetter
