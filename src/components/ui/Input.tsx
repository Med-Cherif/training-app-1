import React, { InputHTMLAttributes } from "react";

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className="form-control" {...props} />;
};

export default Input;
