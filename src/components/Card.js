import React from "react";
import "./Card.css";

const Card = ({
  children,
  variant = "",
  size = "medium",
  className = "",
  image,
  title,
  subtitle,
  footer,
  onClick,
  ...props
}) => {
  // Compute card classes
  const cardClasses = `
    custom-card 
    ${variant} 
    ${size} 
    ${className}
  `.trim();

  return (
    <div className={cardClasses} onClick={onClick} {...props}>
      {/* Card image if provided */}
      {image && (
        <div className="card-image">
          <img src={image} alt={title || "Card image"} />
        </div>
      )}
      
      {/* Card header if title or subtitle provided */}
      {(title || subtitle) && (
        <div className="card-header">
          {title && <h3 className="card-title">{title}</h3>}
          {subtitle && <div className="card-subtitle">{subtitle}</div>}
        </div>
      )}
      
      {/* Card content */}
      <div className="card-content">
        {children}
      </div>
      
      {/* Card footer if provided */}
      {footer && (
        <div className="card-footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;