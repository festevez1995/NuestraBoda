import React from "react";
import homeImg from "/src/assets/wormy.png";
import "/src/components/Home.css"

function Home(){
  let homeMessage = "Nos vamos a casar!";
  let date = "Sabado Agosto 23, 2025";
  let names = "Reyna y Fernando";
  return (
    <div className="home-container">
      <img className="home-img" src={homeImg} />
      <p className="home-description">{homeMessage}</p>
      <h1 className="home-BaG">{names}</h1>
      <p className="home-description">{date}</p>
    </div>
  ); 
}

export default Home;