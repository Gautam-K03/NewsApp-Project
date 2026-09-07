import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import News from "./page/News";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Button />
        <News />
        <Footer/>
      </Wrapper>
    </>
  );
}

export default App;
