import axios from "axios";

import CryptoList from "../components/CryptoList";
import Hero from "../components/Hero";

import Footer from "../components/Footer";
import Header from "../components/Header";

const sleep = async (seconds) => new Promise((resolve) => setTimeout(resolve, seconds * 60 * 60));

export default async function COINS() {
  const coins = await axios

    .get(`https://api.coinstats.app/public/v1/coins`)
    .then(async (res) => {
      // for (const coin of res.data.coins) {
      //   console.log(coin.);
      // }
      // console.log(res.data);

      await sleep(1);

      return res.data.coins;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });

  return (
    <>
      {/* <Header /> */}
      <Hero />
      <CryptoList coins={coins} />
      <Footer />
    </>
  );
}
