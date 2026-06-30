# React Calculator App

A React-based calculator application built for the **Meta Front-End Developer Professional Certificate** (React Basics).

![Screenshot of the React Calculator App](screenshot.png)

The app performs basic arithmetic (add, subtract, multiply, divide) against a running result, with reset controls for both the current input and the accumulated total. It also features a configurable, full-screen **harlequin background** of calculator symbols (`HarlequinPattern`), a reusable component with props for grid size, shape (`square`/`diamond`), scale, colour, and blur.

---

## Prerequisites

Ensure the following software is installed on your host machine:

* **[Node.js](https://nodejs.org/)**: Includes `npm` (Node Package Manager).

---

## Local Setup Instructions

To save space, the `node_modules` folder is omitted from this repository. Execute the following steps in your terminal to reinstall dependencies and run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/BenParsley/React-calc-app.git
```

### 2. Navigate to the Directory

```bash
cd React-calc-app
```

### 3. Install Dependencies
Downloads React and all required libraries listed in `package.json` into a new `node_modules` folder.

```bash
npm install
```

### 4. Start the Development Server
Starts the application. It will automatically open in your default web browser at `http://localhost:3000`.

```bash
npm start
```

---

## Available Scripts

* `npm start` — Runs the app in development mode at [http://localhost:3000](http://localhost:3000). The page reloads on changes.
* `npm test` — Launches the test runner in interactive watch mode.
* `npm run build` — Builds the app for production to the `build` folder, minified and ready to deploy.

---

## Project Structure

* `src/App.js` — The calculator UI and arithmetic logic.
* `src/HarlequinPattern.js` / `HarlequinPattern.css` — The reusable symbol background component.
* `src/App.css` — Styling for the calculator.
