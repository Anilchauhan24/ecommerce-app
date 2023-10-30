import React from "react";
import Hero from "../Component/Hero/Hero.js";
import Popular from "../Component/Popular/Popular.js";
import Offers from "../Component/Offers/Offers.js";
import NewCollection from "../Component/NewCollection/NewCollection.js";
import NewsLetter from "../Component/NewsLetter/NewsLetter.js";
const Shop = () => {


    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <NewCollection />
            <NewsLetter />
        </div>
    )
}
export default Shop;