\# Employee Management System



A full-stack web application to manage employee records using Java, Spring Boot, React, and MySQL.



\## Features



\- Add new employees

\- View all employees

\- Edit employee details

\- Delete employee records

\- Display total employee count

\- Store employee data in a MySQL database

\- Responsive dashboard interface



\## Technology Stack



\*\*Backend\*\*

\- Java 17

\- Spring Boot

\- Spring Data JPA

\- Maven

\- MySQL



\*\*Frontend\*\*

\- React

\- Vite

\- JavaScript

\- CSS



\## Database



Database name: `employee\_management`



Employee table fields:

\- `id` — employee identifier and primary key

\- `name` — employee name

\- `email` — employee email address

\- `department` — employee department



\## Prerequisites



Install the following before running the application:



\- Java 17 or compatible version

\- Node.js and npm

\- MySQL 8 or compatible version



\## Configuration



Create a MySQL database named `employee\_management`.



Configure the database connection in `src/main/resources/application.properties`. Set these environment variables before starting the backend:



\- `DB\_USERNAME` — your MySQL username

\- `DB\_PASSWORD` — your MySQL password



Never commit real passwords or other secrets to a public repository.



\## Run the Backend



Open PowerShell in the project root and run:



```powershell

$env:DB\_USERNAME = "root"

$env:DB\_PASSWORD = Read-Host "Enter your MySQL password"

.\\mvnw.cmd spring-boot:run

```



The backend runs at:



`http://localhost:8080`



\## Run the Frontend



Open a \*\*second terminal\*\* and run:



```powershell

cd frontend

npm install

npm run dev

```



Open the local URL displayed by Vite, usually:



`http://localhost:5173`



\## API Endpoints



| Method | Endpoint | Purpose |

|---|---|---|

| GET | `/api/employees` | Get all employees |

| GET | `/api/employees/{id}` | Get an employee by ID |

| POST | `/api/employees` | Add an employee |

| PUT | `/api/employees/{id}` | Update an employee |

| DELETE | `/api/employees/{id}` | Delete an employee |



\## Project Structure



```text

Employee-Management-System/

├── src/                  # Spring Boot backend

├── frontend/             # React frontend

├── pom.xml               # Maven configuration

├── mvnw

├── mvnw.cmd

├── .gitignore

└── README.md

```



\## Testing



The employee CRUD operations have been tested through the REST API and the web interface.



\## Future Improvements



\- Employee search and filtering

\- Form validation and improved error handling

\- Authentication and role-based access

\- Automated tests



\## Author



Piyush Kumar



\## License



This project is created for educational and internship purposes.



