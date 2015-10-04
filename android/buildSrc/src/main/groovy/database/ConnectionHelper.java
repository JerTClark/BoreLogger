package database;

import java.io.FileReader;
import java.io.IOException;
import java.sql.*;
import java.util.Properties;

public class ConnectionHelper {
    static Properties props = new Properties();

    public static Connection createConnection() throws ClassNotFoundException, SQLException{
        try {
            props.load(new FileReader("gradle.properties"));
        } catch (IOException e) {
            System.out.println("IOException: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        }
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection(props.getProperty("myUrl").replaceAll("\"", "") + "test",
                props.getProperty("myUserName").replaceAll("\"", ""),
                props.getProperty("myPass").replaceAll("\"", ""));
    }

    public static Connection createConnection(String url, String user, String pass) throws ClassNotFoundException, SQLException{
        Class.forName("com.mysql.jdbc.Driver");
        return DriverManager.getConnection(url, user, pass);
    }

    public static void closeConnection(Connection connection) {
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                System.out.println("SQLException: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
        }
    }

    public static void closeStatement(Statement statement) {
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException e) {
                System.out.println("SQLException: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
        }
    }

    public static void closeResultSet(ResultSet resultSet) {
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException e) {
                System.out.println("SQLException: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
        }
    }
}
