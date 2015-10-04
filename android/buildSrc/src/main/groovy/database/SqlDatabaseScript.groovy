package database

import org.gradle.api.DefaultTask
import org.gradle.api.tasks.Input
import org.gradle.api.tasks.TaskAction

import java.sql.Connection
import java.sql.PreparedStatement
import java.sql.Statement

import static database.ConnectionHelper.*

class CreateDatabase extends DefaultTask {
    /**
     * A map of tableName : columnsStatement
     */
    @Input
    def tableNames = [:]
    @Input
    String databaseName, url, username, password

    Connection connection
    Statement statement

    @TaskAction
    void start() {
        final String CREATE_DB = "CREATE DATABASE "
        final String CREATE_TABLE = "CREATE TABLE "
        final String DROP_DB = "DROP DATABASE IF EXISTS "
        try {
            connection = createConnection(url + "test", username, password)
            statement = connection.createStatement()
            statement.execute(DROP_DB + databaseName)
            statement.execute(CREATE_DB + databaseName)
            try {
                closeConnection(connection)
                closeStatement(statement)
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
            connection = createConnection(url + databaseName, username, password)
            statement = connection.createStatement()
            tableNames.eachWithIndex { Map.Entry<Object, Object> entry, int i ->
                statement.execute(CREATE_TABLE + entry.key + " " + entry.value)
            }
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
            FileWriter fileWriter = new FileWriter("createDbErrorData.txt")
            fileWriter.write("SQL Statements:\n")
            tableNames.eachWithIndex { Map.Entry<Object, Object> entry, int i ->
                fileWriter.append(CREATE_TABLE + entry.key + " " + entry.value)
                fileWriter.append("\n")
            }
            fileWriter.flush()
            fileWriter.close()
        } finally {
            try {
                closeConnection(connection)
                closeStatement(statement)
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
        }
    }
}

class PopulateDatabase extends DefaultTask {
    @Input
    def insertStatements = [[:]]
    @Input
    String databaseName, columns, url, username, password

    Connection connection
    Statement statement

    @TaskAction
    void start() {
        final String INSERT = "INSERT INTO "//tableName + VALUES (val1, val2...)
        try {
            connection = createConnection(url + databaseName, username, password)
            statement = connection.createStatement()
            insertStatements.eachWithIndex { LinkedHashMap<String, String> entry, int i ->
                Set<Map.Entry<String, String>> set = entry.entrySet()
                set.each {
                    statement.execute("$INSERT ${it.key} $columns ${it.value}")
                }
            }
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } finally {
            closeConnection(connection)
            closeStatement(statement)
        }
    }
}

class DeleteDatabase extends DefaultTask {
    @Input
    String databaseName, url, username, password

    Connection connection
    PreparedStatement statement

    void delete() {
        final String DROP_DB = "DROP DATABASE IF EXISTS " + databaseName
        try {
            connection = createConnection(url + databaseName, username, password)
            statement = connection.prepareStatement(DROP_DB)
            statement.execute(DROP_DB)
        } catch (Exception e) {
            System.out.println("Exception: " + e.getMessage());
            System.out.println("Caused by: " + e.getCause());
        } finally {
            try {
                closeConnection(connection)
                closeStatement(statement)
            } catch (Exception e) {
                System.out.println("Exception: " + e.getMessage());
                System.out.println("Caused by: " + e.getCause());
            }
        }
    }
}