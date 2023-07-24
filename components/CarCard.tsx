"use client";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
import Image from "next/image";
import React, { useState } from "react";
import CarDetails from "./CarDetails";
import CustomButton from "./CustomButton";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinder: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
interface CarCardProps {
  car: CarProps;
}
const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const carRent = calculateCarRent(car.city_mpg, car.year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-semibold">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          fill
          priority
          className="object-contain"
          src={generateCarImageUrl(car)}
          alt="car model"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/steering-wheel.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {car.transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/tire.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{car.drive.toLowerCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              src={"/gas.svg"}
              alt="steering wheel"
              width={20}
              height={20}
            />
            <p className="text-[14px]">{car.city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        car={car}
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
      />
    </div>
  );
};

export default CarCard;
