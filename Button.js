// Button.js
import React from 'react';
import './pages.css'; // Ensure relevant styles are imported

const Button = ({ label, onClick }) => (
  <button className="button" onClick={onClick}>
    {label}
  </button>
);

export default Button;
