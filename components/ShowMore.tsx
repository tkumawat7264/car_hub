"use client";
import React, { Dispatch, useState, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";
interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
}

const ShowMore = ({ pageNumber, isNext, setLimit }: ShowMoreProps) => {
  const router = useRouter();
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;
