import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <p className="text-red-500 text-xs mt-1 ml-3">{message}</p>;
};

export default ErrorMessage;
