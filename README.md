# Encryptool

This is a simple web application for encrypting and decrypting text or file.

**Note:** This project is currently in a very early stage of development. The encryption and decryption features are not yet implemented.

## Project Structure

The project is divided into two main parts:

- `frontend/`: A React application built with Vite that will provide the user interface for the application.
- `backend/`: A Python FastAPI application that will handle the encryption and decryption logic.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [Python](https://www.python.org/) (v3.10.x or later)

### Installation and Running

**Backend:**

1. Navigate to the `backend` directory: `cd backend`
2. Create a virtual environment: `python -m venv .venv`
3. Activate the virtual environment:
   - macOS/Linux: `source .venv/bin/activate`
   - Windows PowerShell: `.venv\Scripts\Activate.ps1`
   - Windows Bash: `source .venv/Scripts/activate`
4. Install the dependencies: `pip install -r requirements.txt`
5. Run the development server: `uvicorn main:app --reload`

**Frontend:**

1. Navigate to the `frontend` directory: `cd frontend`
2. Install the dependencies: `npm install`
3. Run the development server: `npm run dev`

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.
