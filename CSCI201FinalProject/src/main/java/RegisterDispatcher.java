import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import java.sql.*;

import java.io.IOException;
import java.io.Serial;

/**
 * Servlet implementation class RegisterDispatcher
 */
@WebServlet("/RegisterDispatcher")
public class RegisterDispatcher extends HttpServlet {
    @Serial
    private static final long serialVersionUID = 1L;
    String db = "CHANGE"; // CHANGE
	String user = "root";
	String pwd = "root";
    /**
     * Default constructor.
     */
    public RegisterDispatcher() { 	
    }

    /**
     * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
     * response)
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // Establish Connection with SQL JDBC Driver
    	Connection conn = null;
    	
    	try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} 
    	catch (ClassNotFoundException e1) {
			e1.printStackTrace();
		}
    	
    	// Obtain HttpSession
    	response.setContentType("text/html;charset=UTF-8");
    	HttpSession session = request.getSession();
    	
    	// Obtain Values
    	String username = request.getParameter("username");
    	String password = request.getParameter("password");
    	String passwordConfirm = request.getParameter("confirmpassword");
    	String email = request.getParameter("email");
    	
    	// Password Validation (Confirm Password), *Check if Match
    	if (!password.equals(passwordConfirm)) {
    		session.setAttribute("error", "passwordError"); // Giving Register Error
			request.getRequestDispatcher("CHANGE").forward(request, response); // If password validation fails, refresh page with Register Error
    	}
    	
    	String INSERT = "INSERT INTO Users(username, email, password) VALUES (?,?,?)"; // (username, email, password)
    	String CHECKEMAIL = "SELECT email FROM Users WHERE email = " + "\"" + email + "\""; // check if email already exists in database
       	
    	// Checking for Email Uniqueness
    	try {
    		// Establishing Connecting with Driver
    		conn = DriverManager.getConnection(db, user, pwd);
			Statement st1 = conn.createStatement();
			ResultSet rs1 = st1.executeQuery(CHECKEMAIL);
			if (rs1.next()) { // Means Email Already Existed in Database
				session.setAttribute("error", "Duplicate"); // Giving Duplicate Error
				request.getRequestDispatcher("CHANGE").forward(request, response); // If duplicate email exists, refresh with Duplicate Error
			}
			
			// Insert into Database (SQL JDBC)
			PreparedStatement ps = conn.prepareStatement(INSERT);
			ps.setString(1, username);
			ps.setString(2, email);
			ps.setString(3, password);
			ps.executeUpdate();
			
			// Upon Successful Register, User should automatically be Logged In and Re
	    	// Redirect to Home Page, now logged in as a user.
			session.setAttribute("name", username);
			//session.setAttribute("email", email);	
			request.getRequestDispatcher("CHANGED").forward(request, response);
    	}
    	catch (SQLException e) {
			System.out.println ("SQLException1: " + e.getMessage());
			session.setAttribute("error", "SQL");
			request.getRequestDispatcher("/auth.jsp").forward(request, response);
		}	 
    }

    /**
     * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
     * response)
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        // TODO Auto-generated method stub
        doGet(request, response);
    }

}
