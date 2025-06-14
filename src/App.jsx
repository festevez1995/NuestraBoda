import "./App.css";
import Home from "./components/Home";
import CeremonyBody from "./components/CeremonyBody";
import ReceptionBody from "./components/ReceptionBody";
import NewCard from "./components/NewCard";
import churchImg from "./assets/church.png";

function App() {
  return (
    <>
      <Home />
      <CeremonyBody />
      {/* <div className="body-wrapper">
          <NewCard
            imagePath={churchImg}
            imageName="Saint Mark's University Perish"
            date="Agosto 23, 2025"
            time="11:00 AM"
            place="6550 Picasso Rd, Goleta, CA 93117"
          />
        </div> */}
      {/* <CeremonyBody /> */}
      {/* <ReceptionBody /> */}
    </>
  );
}

export default App;
