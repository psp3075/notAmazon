import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/OnePlusNordNewLaunch/11thJune/seeyou/D23753221_OnePlus_Nord_New_launch_GW_Design_SIM_Tall_hero_1500x600._CB666088334_.jpg"
          alt="slide1"
        />
        <div className="home__row">
          <Product
            id="1"
            title="OnePlus 9 pro 5G (Morning Mist, 12GB RAM, 256GB Storage)"
            price={69999}
            image="https://images-na.ssl-images-amazon.com/images/I/61LvUvbZGlL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="2"
            title="Kindle (10th Gen), 6' Display with Built-in Light,WiFi (Black)"
            price={6799}
            image="https://m.media-amazon.com/images/I/61DCWZlmnOL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="LG 108 cm (43 inches) 4K Ultra HD Smart LED TV 43UM7290PTF (Ceramic Black)"
            price={33999}
            image="https://images-na.ssl-images-amazon.com/images/I/71qN7IK4H1L._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4"
            title="Ikigai: The Japanese Secret to a Long and Happy Life "
            price={199}
            image="https://m.media-amazon.com/images/I/511HccWipML.jpg"
            rating={5}
          />
          <Product
            id="5"
            title="Asgard Nonwoven Fabric Disposable 3 Ply Surgical Mask (Blue, Without Valve, Pack of 100) for Unisex"
            price={699}
            image="https://images-na.ssl-images-amazon.com/images/I/71qshn-Y67L._SL1500_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="New Apple MacBook Air with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD) - Silver (Latest Model)"
            price={117900}
            image="https://images-na.ssl-images-amazon.com/images/I/71TPda7cwUL._AC_SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="7"
            title="Ariel Matic Top Load Detergent Washing Powder - 4 kg with Free Detergent Powder - 2 kg"
            price={999}
            image="https://m.media-amazon.com/images/I/71Nd4RhZ4sL._SL1500_.jpg"
            rating={4}
          />
          <Product
            id="8"
            title="MuscleBlaze Raw Whey Protein"
            price={1999}
            image="https://m.media-amazon.com/images/I/613bnSZnZ9L._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="9"
            title="Decals Design  - Wall Sticker"
            price={99}
            image="https://m.media-amazon.com/images/I/715YNejm3FL._SL1000_.jpg"
            rating={4}
          />
          <Product
            id="10"
            title="Royal Enfield Unbent Polo T-Shirt"
            price={1299}
            image="https://m.media-amazon.com/images/I/81ft4I1HtAL._UL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
