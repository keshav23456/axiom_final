import React from "react";
import "./Section.css";

const Section = ({
  children,
  id,
  variant = "",
  title,
  subtitle,
  className = "",
  titleGradient = true,
  titleUnderline = true,
  ...props
}) => {
  // Compute section classes
  const sectionClasses = `
    section 
    ${variant} 
    ${className}
  `.trim();
  
  // Compute title classes
  const titleClasses = `
    section-title
    ${titleGradient ? "gradient-text" : ""}
    ${titleUnderline ? "underline" : ""}
  `.trim();

  return (
    <section id={id} className={sectionClasses} {...props}>
      <div className="section-container">
        {/* Section header if title or subtitle provided */}
        {(title || subtitle) && (
          <div className="section-header">
            {title && <h2 className={titleClasses}>{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}
        
        {/* Section content */}
        {children}
      </div>
    </section>
  );
};

export default Section;