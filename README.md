# Next.js and Django Integration Dashboard

## Overview

This project is a web application that combines a Next.js frontend with a Django API backend. The application features a dashboard with four different types of charts: Candlestick, Line, Bar, and Pie charts. The data for these charts is served from a Django API and displayed dynamically using the Next.js frontend.

## Getting Started

Follow the instructions below to set up and run the application.

### Prerequisites

- Node.js (for running the Next.js frontend)
- Python 3.x (for running the Django backend)
- pip (Python package installer)

## Backend Setup

1. **Navigate to the backend directory**
    ```bash
    cd django-charts-api
    
2. **Create a virtual environment:**
    ```bash
    python -m venv venv
    source venv/bin/activate  # Linux/Mac 
    `venv\Scripts\activate` # Windows

3. **Install dependencies**
    ```bash
    pip install -r requirements.txt
    
4. **Start the Django development server:**
    ```bash
    python manage.py runserver
    
The API will be accessible at http://localhost:8000.

## Frontend Setup

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd frontend
   
2. **Install dependencies:**
    ```bash
    npm install
    
3. **Start the development server:**
    ```bash
    npm run dev

The application will be accessible at http://localhost:3000.

## Testing
### Django API

1. **To test the views to ensure they return the expected data and status codes, run the following command inside the `django-charts-api` folder:**
    ```bash
    python manage.py test
    
### Next.js
1. **To test that all components and charts are rendered properly, runt he following command inside the `nextjs-charts` folder:**
    ```bash
    npm test


## Libraries and Tools Used
### Frontend
- Next.js
- Chart.js
- Recharts
- Bootstrap
- Axios
- Jest with React Testing Library
- Django's `unittest` framework

### Backend
- Django: High-level Python web framework.
- Django REST Framework: Toolkit for building Web APIs.

## Approach, Thought Process, and notes

- The frontend is built using Next.js and for the backend a Django API is created to provide hardcoded data for each type of chart.
- We use Chart.js and Recharts (for the Candlestick chart) in the Next.js frontend to render the charts. Each chart fetches its data from the Django API using Axios.
- The API endpoints are structured to return JSON data in formats that Chart.js expects.
Django REST Framework is utilized to easily handle API requests and responses.
- The frontend communicates with the Django backend to retrieve the chart data.
- The data is then passed to Chart.js to render the charts on the dashboard.
- Error handling is implemented to manage API request failures gracefully in the UI (can be tested by running the application without the backend running).
- Unit and Integration tests on various parts including expected data and status codes on the backend and proper rendering of componenets on the frontend.
- Intuitive and responsive design, clear data representation
- Clean, readable, and well-documented code.


