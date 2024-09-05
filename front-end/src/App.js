import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Scheduling from "./components/Scheduling/Scheduling";
import BudgetCalculator from "./components/BudgetCalculator/BudgetCalculator";
import GoalsTracker from "./components/GoalsTracker/GoalsTracker";
import Reports from "./components/Reports/Reports";
import CreateReport from "./components/Reports/CreateReport/CreateReport";

/*
  Navigation Bar Links
  Used by the Navbar components to generate buttons and links to all the pages.
*/
const navbarLinks = [
  { name: "Home", icon: "house" },
  { name: "Scheduling", icon: "calendar" },
  { name: "Goals Tracker", icon: "ui-checks" },
  { name: "Budget Calculator", icon: "currency-dollar" },
  { name: "Reports", icon: "file-text" },
];

// Routes to switch between different pages
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/scheduling",
    element: <Scheduling />,
  },
  {
    path: "/goals tracker",
    element: <GoalsTracker />,
  },
  {
    path: "/budget calculator",
    element: <BudgetCalculator />,
  },
  {
    path: "/reports",
    element: <Reports />,
  },
  {
    path: "/reports/create",
    element: <CreateReport />
  }
]);

export default function App() {
  return (
    <div className="App">
      <Navbar links={navbarLinks} />
      <div className="App-main-container">
        <header className="App-header">
          <h1>Admin Dashboard</h1>
        </header>
        <body>
          <RouterProvider router={router} />
        </body>
      </div>
    </div>
  );
}
