import axios from "axios";
import Image from "next/image";
import { checkPrice } from "../../components/cryptoList";
import Layout from "../notFound/layout";
import NotFound from "../notFound/page";

export default async function ID({ params }) {
  const { id } = params;

  // const [first, setfirst] = useState("second");

  const coin = await axios
    .get(`https://api.coinstats.app/public/v1/coins/${id}`)
    .then((res) => {
      return res.data.coin;
    })
    .catch((err) => {
      return null;
    });

  // console.log(coin?.data);

  return coin ? (
    <Layout>
      <section style={{ background: "#eee" }}>
        <div className="container">
          <h1>Coin Details</h1>

          <div className="--flex-start --column-reverse" key={id}>
            <div className="--card --card-blue --mr">
              <h4 className="--color-danger">~{coin.name}</h4>
              {/* <h4>~ Price${formatNumbers(coin.price?.toFixed(2))}</h4> */}
              <h4>~ Rank: {coin.rank}</h4>
              <ul className="coin-details">
                <li>
                  <span> Change in 1Hr</span>
                  <span className={checkPrice(coin.priceChange1h)}>{coin.priceChange1h}</span>
                </li>
                <li>
                  <span> Change in 24Hr</span>
                  <span className={checkPrice(coin.priceChange1d)}>{coin.priceChange1d}</span>
                </li>
                <li>
                  <span> Change in 1week</span>
                  <span className={checkPrice(coin.priceChange1w)}>{coin.priceChange1w}</span>
                </li>
                <li>
                  <span>Market Cap:</span>
                  <span>${coin.marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </li>
                <li>
                  <span>Total Supply:</span>
                  <span>{coin.totalSupply.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </li>
                <li>
                  <span>Website :</span>
                  <span>
                    <a href={coin.websiteUrl} target="_blank" rel="noreferrer" className="--color-primary">
                      {coin.websiteUrl.replace("http://www.", "").replace("https://www.", "").replace("http://", "").replace("/", "")}
                    </a>
                  </span>
                </li>
              </ul>
              <div className="--card --bg-primary">
                <div className="--flex-start --align-center">
                  <Image src={coin.icon} alt={coin.name} width="50" height={50} />
                  &nbsp; &nbsp;
                  <span>
                    <p className="--text-ligt"> {coin.symbol}</p>
                    <h2 className="--text-ligt"> {coin.name}</h2>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  ) : (
    <NotFound />
  );
}
