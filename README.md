
# Task-Management-System
The Task Management Application is a full-stack web application designed to allow users to manage their tasks efficiently. It features secure authentication, task creation and management, and the ability to export tasks as an Excel file. Here's a detailed description of the components and functionalities:






https://github.com/user-attachments/assets/ca44488d-9e30-41f9-9d15-8a0c4619a245

>>>>>>> 074408e70d4f5be49a309c61d34d296c2b88cf7f


Task Management System
A full-stack Task Management System with:

Authentication using Node.js backend.

Frontend built with React.js.

Task Management stored in an SQLite database.

Django REST Framework backend for Task CRUD operations and Export to Excel functionality.

Application Functionalities
1. User Authentication
User Registration and Login forms.

Redirect to the Task Creation page after successful login.

2. Task Management
Task Creation Form with fields:

Task Title

Description

Effort To Complete (in Days)

Due Date

Input Validation (e.g., non-empty title, valid due date).

Task List View:

Displays all tasks created by the logged-in user.

Task Update View:

Update existing tasks.

Task Delete Button:

Delete a task from the list.

3. Export Tasks to Excel
"Export to Excel" button on the frontend.

Clicking triggers a request to Django REST backend to generate and download an Excel file containing the user’s tasks.

git clone https://github.com/Naveenkuratti/Task-Management-System.git
cd Task-Management-System

cd frontend
npm install
npm start

cd backend1
npm install
node server.js

cd backend2
python -m venv venv
source venv/bin/activate  # On Windows use: venv\Scripts\activate
pip install -r requirements.txt
python manage.py runserver

Usage
Register/Login through the frontend.

Create, view, update, and delete tasks.

Export all your tasks as an Excel file with a single click.

Technologies Used
Frontend: React.js

Backend1 (Authentication API): Node.js, Express.js

Backend2 (Task Management API): Django, Django REST Framework

Database: SQLite

Others: Excel file generation

Author
Naveen Kuratti
