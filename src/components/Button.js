import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

const Button = ({
  children,
  variant = "primary",
  size = "medium",
  icon,
  iconPosition = "left",
  fullWidth = false,
  href,
  to,
  type = "button",
  onClick,
  className,
  ...props
}) => {
  // Compute button classes
  const buttonClasses = `
    custom-button 
    ${variant} 
    ${size} 
    ${fullWidth ? "full-width" : ""} 
    ${icon && iconPosition === "right" ? "icon-right" : ""} 
    ${className || ""}
  `.trim();

  // Render button icon
  const renderIcon = () => {
    if (!icon) return null;
    return <span className="button-icon">{icon}</span>;
  };

  // Render button content
  const buttonContent = (
    <>
      {iconPosition === "left" && renderIcon()}
      {children}
      {iconPosition === "right" && renderIcon()}
    </>
  );

  // Render as Link component if 'to' prop is provided (for internal navigation)
  if (to) {
    return (
      <Link to={to} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  // Render as anchor tag if 'href' prop is provided (for external navigation)
  if (href) {
    return (
      <a 
        href={href} 
        className={buttonClasses} 
        target="_blank" 
        rel="noopener noreferrer" 
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button element by default
  return (
    <button type={type} className={buttonClasses} onClick={onClick} {...props}>
      {buttonContent}
    </button>
  );
};

export default Button;