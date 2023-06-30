"use client";
import styles from "../styles/cryptoList.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import Search from "../components/Search";
import ReactPaginate from "react-paginate";

export const checkPrice = (p) => {
  const priceChange = Math.sign(p);
  if (priceChange === -1) {
    return "red";
  }
  return "green";
};

const CryptoList = ({ coins }) => {
  const [search, setSearch] = useState("");
  const [filteredCoins, setFilteredCoins] = useState([]);

  //start pagination
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(filteredCoins.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(filteredCoins.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, filteredCoins]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredCoins.length;
    setItemOffset(newOffset);
  };
  //end pagination

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  //Search coins
  useEffect(() => {
    setFilteredCoins(coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase())));
  }, [search, coins]);

  return (
    <section className="coin-list">
      <div className="container">
        <div className={styles.table}>
          <Search value={search} onChange={handleSearch} />
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>Symbol</th>
                <th>Coin Name</th>
                <th>Price</th>
                <th>Change 24h</th>
                <th style={{ textAlign: "right" }}>Market Cap</th>
              </tr>
            </thead>
            <tbody>
              {/* initially, coins was mapped, and when there's need for filter, it was changed to filteredCoins and when the time for pagination comes, it was then changed to currentItems */}
              {currentItems?.map((coin, i) => {
                const { name, id, symbol, priceChange1d, icon, price, marketCap } = coin;
                return (
                  <tr key={coin.id}>
                    <td>{i + 1}</td>
                    <td>
                      <Image src={icon} width={25} height={25} alt={name} /> &nbsp;
                      {symbol}
                    </td>
                    <td>
                      <Link href={`/${id}`}>{name}</Link>
                    </td>
                    {/* <td style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <Image src={icon} width={25} height={25} alt={name} /> &nbsp;
                    </td> */}
                    <td>${price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                    <td className={checkPrice(priceChange1d)}>{priceChange1d}</td>
                    <td style={{ textAlign: "right" }}>
                      ${marketCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* paginate */}
        <ReactPaginate
          breakLabel="..."
          nextLabel="Next"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel="Prev"
          renderOnZeroPageCount={null}
          containerClassName="pagination"
          pageLinkClassName="page-num"
          previousLinkClassName="page-num"
          nextLinkClassName="page-num"
          activeLinkClassName="active"
        />
      </div>
    </section>
  );
};

export default CryptoList;
