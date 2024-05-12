import { FoodList } from "@/constant/FoodApp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onClose: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange }) => {
  const [searchResults, setSearchResults] = useState<typeof FoodList>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (inputValue: string) => {
    onChange(inputValue);

    const filteredResults = FoodList.filter(
      (food) =>
        food.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        food.description.toLowerCase().includes(inputValue.toLowerCase())
    );

    setSearchResults(filteredResults);
  };

  return (
    <div className="relative setborder2 rounded-md flex setbg1 items-center w-full">
      <IoSearchOutline className="absolute left-4 top-1/2 -translate-y-1/2" />
      <input
        ref={inputRef}
        onChange={(e) => handleInputChange(e.target.value)}
        value={value}
        autoComplete="off"
        required
        type="text"
        className="w-full setbg1 h-10 pr-10 pl-12 placeholder-pl-2 rounded-md border-none focus:outline-none text-sm"
        placeholder="Search..."
      />

      {value && searchResults.length > 0 && (
        <div className="absolute top-full left-0 w-full bg-black/20 mt-2 rounded-md shadow-md z-10 backdrop-blur-sm">
          {searchResults.map((result) => (
            <div key={result._id} className="flex items-center p-4 border-b ">
              <Image
                src={result.image}
                alt={result.name}
                width={64}
                height={64}
                className="rounded-md"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{result.name}</h3>
                <p className="text-purple-400">${result.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
