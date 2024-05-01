# Hospital Management Web Application

This project is a React.js web application designed to manage an office employee in a hospital setting. It includes functionalities such as managing contracts, patients, home visits, roles & users, and general settings.

## Live Link: https://shreyo-react.web.app

## Features

- **Dashboard**: Provides an overview of different sections of the application.

  - Contracts: Displays contract-related information.
  - Patients: Manages patient details and records.
  - Home Visits: Tracks and schedules home visits for patients.
  - Roles & Users: Manages roles and user accounts within the system.
  - Settings: General settings for the application.

- **Contracts Management**:

  - View contracts in a table format.
  - Create new contracts using a form with validation.
  - Update existing contracts using an update form.

- **Patients Management**:

  - View patient records in a table view.
  - Create new patient entries with form validation.
  - Update patient information as needed.

- **Home Visits**:

  - Schedule and manage home visits for patients.
  - Track visit details and status.

- **Roles & Users**:

  - Manage user roles and permissions.
  - Add, edit, and delete user accounts.

- **Settings**:
  - General settings for the application, such as theme, notifications, etc.

## Technologies Used

- React.js for front-end development.
- JavaScript for logic implementation.
- Bootstrap for responsive design and UI components.
- API integration for data fetching and management.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Folder Structure

```
hospital-management-app/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Contracts/
│   │   ├── Patients/
│   │   ├── HomeVisits/
│   │   ├── RolesUsers/
│   │   ├── Settings/
│   │   └── Dashboard/
│   │
│   ├── App.js
│   └── index.js
│
└── README.md
```
