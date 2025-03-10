import { SetStateAction, useContext, Dispatch, useState } from "react";
import { SearchContext } from "../Contexts";
// import { debounce } from "lodash";

interface SearchContextType {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

const Search: React.FC = () => {
  const { setValue } = useContext(SearchContext) as SearchContextType;
  const [inputValue, setInputValue] = useState("");

  const handleChangeInput = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setInputValue(event.target.value);
  };

  const handleSubmitValue = () => {
    setValue(inputValue);
  };

  return (
    <>
      <div className="search-section">
        <div className="input-wrapper">
          <input
            value={inputValue}
            type="search"
            placeholder="Enter a city name"
            className="search-input"
            onChange={handleChangeInput}
          ></input>
        </div>
        <button className="location-button" onClick={handleSubmitValue}>
          <span className="material-symbols-rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </>
  );
};

export default Search;
