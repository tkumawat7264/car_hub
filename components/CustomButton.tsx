"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonTypes {
  title: string;
  containerStyles?: string;
  textStyles?: string;
  rightIcon?: string;
  btnType?: "button" | "submit";
  disabled?: boolean;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType = "button",
  textStyles,
  rightIcon,
  disabled,
}: CustomButtonTypes) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
