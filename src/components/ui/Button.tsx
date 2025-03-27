import React, { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <button className="btn" {...props} />;
};

export default Button;
