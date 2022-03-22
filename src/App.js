import Header from "./components/header/header";
import Search from "./components/search/search";
import Recommendation from "./components/recommendation/recommendation";
import Sections from "./components/sections/sections";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Sections />
      <Recommendation />
      <Footer />
    </div>
  );
}

export default App;
