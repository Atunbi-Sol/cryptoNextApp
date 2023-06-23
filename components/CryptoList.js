import styles from ".././src/style/cryptoList.module.scss";
import Link from "next/Link";
import Image from "next/Image";

const CryptoList = () => {
  return (
    <section className="coin-list">
      <div className="container">
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>s/n</th>
                <th>Coin</th>
                <th>Price</th>
                <th>Change 24h</th>
                <th>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin, index) => {
                const { id, price, name, icon, priceChange1d, marketCap, symbol } = coin;
                return (
                  <Link key={id} href={"/" + id}>
                    <tr>
                      <td>{index + 1}</td>
                      <td>
                        <Image src={icon} alt={name} width="20" height="20" /> &nbsp; {symbol}
                      </td>
                    </tr>
                  </Link>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CryptoList;
