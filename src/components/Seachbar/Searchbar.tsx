"use client";
import { FoodList, FoodListInterface } from "@/constant/FoodApp";
import { MenuList, MenuListInterface } from "@/constant/FoodApp";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { StaticImageData } from "next/image";

const SearchPage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [searchResults, setSearchResults] = useState<FoodListInterface[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isOpen]);

  const handleInputChange = (inputValue: string) => {
    setSearchValue(inputValue);
    const filteredResults = FoodList.filter(
      (food) =>
        food.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        food.description.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSearchResults(filteredResults);

    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleClose = () => {
    setSearchValue("");
    setIsOpen(false);
  };

  const handleResultClick = (resultId: string) => {
    router.push(`/search/${resultId}`);
  };

  return (
    <Sheet>
      <SheetTrigger
        className="w-full flex-center "
        onClick={() => setIsOpen(true)}
      >
        <IoSearchOutline />
      </SheetTrigger>
      {isOpen && (
        <SheetContent
          className={`h-dvh bg-black/20 mx-auto max-w-5xl
           max-h-90dvh overflow-hidden w-full container flex flex-col`}
        >
          <div className="relative flex flex-col z-10">
            <SheetTrigger className="p-2 absolute top-1 right-2 z-50 m-0 rounded-full hover:bg-stone-500">
              <FiX onClick={handleClose} />
            </SheetTrigger>
            <div className="relative setborder2 rounded-md flex setbg1 items-center w-full">
              <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                ref={inputRef}
                onChange={(e) => handleInputChange(e.target.value)}
                value={searchValue}
                autoComplete="off"
                required
                type="text"
                className="w-full setbg1 h-10 pr-10 pl-12 placeholder-pl-2 rounded-md border-none focus:outline-none text-sm"
                placeholder="Search..."
              />
            </div>
            <h1 className="text-center py-1 flex-center">
              {searchResults.length} results found
            </h1>
          </div>

          {searchValue && searchResults.length > 0 ? (
            <section className=" overflow-y-auto">
              <div className="">
                {searchValue && searchResults.length > 0 && (
                  <div className="w-full bg-black/20 mt-2 rounded-md shadow-md z-10 backdrop-blur-sm">
                    {searchResults.map((result) => (
                      <div
                        key={result._id}
                        className="flex items-center p-4 border-b "
                        onClick={() => handleResultClick(result._id)}
                      >
                        <Image
                          src={result.image}
                          alt={result.name}
                          width={64}
                          height={64}
                          className="rounded-md"
                        />
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold">
                            {result.name}
                          </h3>
                          <p className="text-purple-400">
                            ${result.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          ) : (
            <>
              <h1 className="h7 text-center">
                If this food how can we miss this
              </h1>
            </>
          )}
        </SheetContent>
      )}
    </Sheet>
  );
};

export default SearchPage;