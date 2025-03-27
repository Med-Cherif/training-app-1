import React from "react";

const ErrorMessage = ({ message }: { message: string | undefined }) => {
  if (!message) return null;

  return <p className="error-message">{message}</p>;
};

export default ErrorMessage;
