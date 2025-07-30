import "./App.css";
import Home from "./components/Home";
import CeremonyBody from "./components/CeremonyBody";
import AttireBody from "./components/AttireBody";
import ReceptionBody from "./components/ReceptionBody";
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      <Home />
      <CeremonyBody />
      {/* <AttireBody /> */}
      <ReceptionBody />
      <Gallery />
    </>
  );
}

export default App;
