package Util;
import java.util.*;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.io.*;
import java.util.*;
import java.sql.*;
import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.CallableStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SQLHelper {
	public static ArrayList<Task> getHistory() {
		ArrayList<Task> tasks = new ArrayList<Task>();
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        
        try {
        	//"jdbc:mysql://localhost:3306/restaurantData"
        //weird time zone thing "jdbc:mysql://localhost/restaurantdata?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost/ChoreboardDatabase?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC", "root", "root");
        
        CallableStatement callst;
        callst = con.prepareCall("{CALL getHistory()}");
        
      
        
        ResultSet rs = callst.executeQuery();
        
        ResultSetMetaData rsmd = rs.getMetaData();
        int columnsNumber = rsmd.getColumnCount();
        
        while (rs.next()) {
        	Task temp = new Task();
        	
        	temp.setTaskName(rs.getString(1));
        	temp.setCompletedBy(rs.getString(2));
        	temp.setDifficulty(Double.parseDouble(rs.getString(3)));
        	temp.setCompletionDate(rs.getString(4));
        	
            tasks.add(temp);
        }
        
        
        }
        catch (SQLException e) {
        	e.printStackTrace();
        }

        
        return tasks;
	}
	
	
	
	public static ArrayList<Task> getTasksByGroup(String groupID) {
		ArrayList<Task> tasks = new ArrayList<Task>();
        try {
            Class.forName("com.mysql.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }
        
        try {
        	//"jdbc:mysql://localhost:3306/restaurantData"
        //weird time zone thing "jdbc:mysql://localhost/restaurantdata?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC"
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost/ChoreboardDatabase?useUnicode=true&useJDBCCompliantTimezoneShift=true&useLegacyDatetimeCode=false&serverTimezone=UTC", "root", "root");
        
        CallableStatement callst;
        callst = con.prepareCall("{CALL getHistory(? )}");
        
        callst.setString(1, groupID);
        
        ResultSet rs = callst.executeQuery();
        
        ResultSetMetaData rsmd = rs.getMetaData();
        
        while (rs.next()) {
        	Task temp = new Task();
        	
        	temp.setTaskName(rs.getString(1));
        	temp.setCompletedBy(rs.getString(2));
        	temp.setDifficulty(Double.parseDouble(rs.getString(3)));
        	temp.setCompletionDate(rs.getString(4));
        	
            tasks.add(temp);
        }
        
        
        }
        catch (SQLException e) {
        	e.printStackTrace();
        }

        
        return tasks;
	}
}
