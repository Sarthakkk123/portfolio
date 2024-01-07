// Navbar.js
import React, { useState } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import "./components.css";

const navigationItems = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Skills", value: "skills" },
  { label: "Projects", value: "projects" },
  { label: "Contact", value: "contact" },
];

const LabelBottomNavigation = ({ selectedNavItem }) => {
  const [value, setValue] = useState("home");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation className="navbar" value={value} onChange={handleChange}>
      {navigationItems.map((item) => (
        <BottomNavigationAction
          key={item.value}
          className={value === item.value ? selectedNavItem : ""}
          label={item.label}
          value={item.value}
        />
      ))}
    </BottomNavigation>
  );
};

const Navbar = () => {
  return (
    <div style={{ marginBottom: "60px" }}>
      {/* Your other Navbar content */}
      <LabelBottomNavigation selectedNavItem="selectedNavItem" />
    </div>
  );
};

export default Navbar;
