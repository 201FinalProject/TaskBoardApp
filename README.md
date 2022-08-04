# TaskBoard-CSCI201FinalProject <br>

This project is a web application that allows users to join other groups and assign tasks to members of the group. Once logged in, they can use a join code to join a specific group. At that point, members can assign tasks to members. Each task has a title, assignee, description, due date, and difficulty. 

## Deployment Instructions <br>

In order to deploy the application, follow the text instructions below:
1. In a fresh Terminal, navigate to the folder where you want to store the project. Copy the SSH Code from https://github.com/201FinalProject/CSCI201FinalProject and clone the repository. Alternatively, open the ZIP.
2. Open the TaskBoard.sql file in MySQL, located inside the root directory of the project. Run the SQL server, then run the given script. This will create the database for the project.
3. Navigate to a fresh workspace in Eclipse. Select Import Projects > Maven > Existing Maven Projects > Next. For the “Root Directory,” pick the folder titled “spring-boot-spring-security-jwt-authentication-master” inside the repository folder “Full-Stack-Pt.2.” Click Finish.
4. Under src/main/java, inside the package “spring.backend,” run SpringBootSecurityJwtApplication.java as a Java Application. This launches our back-end framework which we will use to connect our front-end to SQL.
5. If your username and password are not “root” and “root,” enter your MySQL credentials in the application.properties file under src/main/resources.
6. After running the Spring framework in step 4, open up TaskBoard2.sql. Run that SQL script. It is important to execute steps 2-5 in this particular order.
7. Install Node.js from https://nodejs.org/en/download/ . Follow the instructions given by the installer.
8. Now it’s time to launch the application itself. Open a fresh Terminal. Navigate to the folder CSCI201FinalProject/Full-Stack/react-jwt-auth-master. Once in the react-jwt-auth-master folder, enter the command “npm install.” After the installation is complete, type the command “npm start.” 
9. If you want to change the port the application runs on, in the file CSCI201FinalProject/Full-Stack-Pt.2/react-jwt-auth-master/.env, the port can be specified.

Note: the Spring application must be run on 8080. Use npx kill-port if something else is running on this port.
