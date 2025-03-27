import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button = ({ isLoading, children, ...props }: ButtonProps) => {
  return (
    <button disabled={isLoading} className="btn" {...props}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
