import { useState } from "react";

import Search from "./components/Search";
import Weather from "./components/Weather";
import { SearchContext } from "./Contexts";

const App: React.FC = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <SearchContext.Provider value={{ value, setValue }}>
        <div className="container">
          <Search />
          <Weather city={value} />
        </div>
      </SearchContext.Provider>
    </>
  );
};

export default App;
