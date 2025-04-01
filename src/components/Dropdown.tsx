import { useState } from "react";

type Props = {
  selectedValue?: string;
  options: string[];
  onSelect: (value: string) => void;
};

const Dropdown = ({ selectedValue, options, onSelect }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-30">
      <div
        className="inline-flex justify-center items-center text-sm font-medium pr-4 p-2 text-gray-700 border-gray-300 rounded-md hover:bg-gray-100 caret-transparent"
        onMouseEnter={() => setIsOpen(true)}
      >
        {selectedValue}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg transition-opacity ease-out duration-200"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            {options?.map((option) => (
              <div
                key={option}
                className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${
                  option === selectedValue ? "bg-gray-100" : ""
                }`}
                onClick={() => {
                  onSelect(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
