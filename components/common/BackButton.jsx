"use client";

import React from "react";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const BackButton = ({
  onClick,
  text = "Back",
  className = "",
  iconClassName = "h-4 w-4 mr-1",
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors duration-200 group ${className}`}
    >
      <ArrowLeftIcon
        className={`${iconClassName} group-hover:-translate-x-1 transition-transform duration-200`}
      />
      {text}
    </button>
  );
};

export default BackButton;
