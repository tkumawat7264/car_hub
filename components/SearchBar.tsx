"use client";
import React, { Dispatch, useState, SetStateAction } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt="magnifying-glass.svg"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = ({
  setManufacturer,
  setModel,
}: {
  setManufacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModal, setSearchModal] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchManufacturer === "" && searchModal === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModal);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="icon"
        />
        <input
          type={"text"}
          name="modal"
          value={searchModal}
          onChange={(e) => setSearchModal(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
