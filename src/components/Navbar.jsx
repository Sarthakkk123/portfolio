import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "./components.css";
import { Link, useLocation } from "react-router-dom";

const navigationItems = [
  { label: "Home", value: "home", to: "/" },
  { label: "About", value: "about", to: "/about" },
  { label: "Skills", value: "skills", to: "/skills" },
  { label: "Project", value: "project", to: "/project" },
  { label: "Contact", value: "contact", to: "/contact" },
];

const LabelBottomNavigation = () => {
  const location = useLocation();
  const [value, setValue] = useState(() => {
    const matchingItem = navigationItems.find(
      (item) => item.to === location.pathname
    );
    return matchingItem ? matchingItem.value : "home";
  });

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className="navbar" value={value} onChange={handleChange}>
      {navigationItems.map((item) => (
        <Link key={item.value} to={item.to} className="nav-link">
          <BottomNavigationAction
            key={item.value}
            className={value === item.value ? "selectedNavItem" : ""}
            label={item.label}
            value={item.value}
          />
        </Link>
      ))}
    </BottomNavigation>
  );
};

const Navbar = () => {
  return (
    <div style={{ marginBottom: "40px" }}>
      <LabelBottomNavigation />
    </div>
  );
};

export default Navbar;
