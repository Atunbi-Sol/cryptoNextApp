import styles from "../styles/cryptoList.module.scss";
import Link from "next/link";
import Image from "next/image";

// export const formatNumbers = (x) => {
//   return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// };

export const checkPrice = (p) => {
  const priceChange = Math.sign(p);
  if (priceChange === -1) {
    return "red";
  }
  return "green";
};

const CryptoList = ({ coins }) => (
  <section className="coin-list">
    <div className="container">
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>s/n</th>
              <th>Symbol</th>
              <th>Coin</th>
              <th>Icon</th>
              <th>Price</th>
              <th>Change 24h</th>
              <th>Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coins?.map((coin, i) => {
              return (
                <tr key={coin.id}>
                  <td>{i + 1}</td>
                  <td>{coin.symbol}</td>
                  <td>
                    {/* <Link href={"/" + i}>{coin.name}</Link> */}
                    <Link href={`/${coin.id}`}>{coin.name}</Link>
                  </td>
                  <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <Image src={coin.icon} width={25} height={25} alt={coin.name} />
                    {/* {coin.symbol} */}
                  </td>
                  {/* <td>${formatNumbers(coin.price.toFixed(2))}</td> */}
                  <td>${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                  <td className={checkPrice(coin.priceChange1d)}>{coin.priceChange1d}</td>
                  <td style={{ textAlign: "right" }}>
                    ${coin.marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default CryptoList;

// {
//   coins.map((coin, i) => {
//     return (
//       <tr>
//         <td>{i + 1}</td>
//         <td>{coin.symbol}</td>
//         <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
//           <Image src={coin.icon} width={30} height={30} />
//           {coin.symbol}
//         </td>
//         <td>
//           <Link href={`/${coin.id}`}>{coin.name}</Link>
//         </td>
//         <td>${formatNumbers(coin.price.toFixed(2))}</td>
//         <td className={checkPrice(coin.priceChange1d)}>{coin.priceChange1d}</td>
//         <td>${formatNumbers(coin.marketCap.toFixed(2))}</td>
//       </tr>
//     );
//   });
