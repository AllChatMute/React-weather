import NoResults from "./components/NoResults";
import Search from "./components/Search";
import Weather from "./components/Weather";

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Search />
        <NoResults />
        <Weather city="Тобольск" />
      </div>
    </>
  );
};

export default App;
