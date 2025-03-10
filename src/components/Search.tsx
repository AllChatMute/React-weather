const Search = () => {
  return (
    <>
      <div className="search-section">
        <div className="input-wrapper">
          <input
            type="search"
            placeholder="Enter a city name"
            className="search-input"
          ></input>
        </div>
        <button className="location-button">
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
