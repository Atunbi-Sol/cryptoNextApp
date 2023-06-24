import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/components/Layout";
import Hero from "./hero";
import CryptoList from "./cryptoList";
import Loader from "./Loader";

export default function Home() {
  const [pagerReady, setPagerReady] = useState(false);
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setPagerReady(true);
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://api.coinstats.app/public/v1/coins?skip=0&limit=10");
        setCoins(res.data.coins);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } catch (error) {
        alert(error);
      }
    };

    fetchData();
  }, []);

  return pagerReady ? (
    <main>
      <Layout>
        <Hero />
        {loading ? <Loader /> : <CryptoList coins={coins} />}
      </Layout>
    </main>
  ) : (
    ""
  );
}
